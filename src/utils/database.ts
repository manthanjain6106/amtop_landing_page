import { MongoClient, Db } from 'mongodb';

interface EmailSubscription {
  email: string;
  section: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  source: string;
  status: 'active' | 'unsubscribed';
}

let db: Db | null = null;
let client: MongoClient | null = null;

export async function connectToDatabase() {
  if (db) return db;
  
  try {
    const uri = process.env.DATABASE_URI;
    if (!uri) {
      throw new Error('DATABASE_URI environment variable is not set');
    }

    client = new MongoClient(uri);
    await client.connect();
    db = client.db('amtop_website');
    
    // Create indexes for better performance
    await db.collection('email_subscriptions').createIndex({ email: 1 });
    await db.collection('email_subscriptions').createIndex({ section: 1 });
    await db.collection('email_subscriptions').createIndex({ timestamp: 1 });
    
    console.log('Connected to database successfully');
    return db;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}

export async function storeEmailSubscription(
  email: string,
  section: string,
  source: string = 'website',
  ipAddress?: string,
  userAgent?: string
): Promise<boolean> {
  try {
    const database = await connectToDatabase();
    const collection = database.collection('email_subscriptions');
    
    // Check if email already exists for this section
    const existing = await collection.findOne({ 
      email: email.toLowerCase(), 
      section: section 
    });
    
    if (existing) {
      // Update existing subscription
      await collection.updateOne(
        { _id: existing._id },
        { 
          $set: { 
            timestamp: new Date(),
            source,
            ipAddress,
            userAgent,
            status: 'active'
          }
        }
      );
      return true;
    }
    
    // Create new subscription
    const subscription: EmailSubscription = {
      email: email.toLowerCase(),
      section,
      timestamp: new Date(),
      ipAddress,
      userAgent,
      source,
      status: 'active'
    };
    
    await collection.insertOne(subscription);
    return true;
  } catch (error) {
    console.error('Failed to store email subscription:', error);
    return false;
  }
}

export async function getEmailSubscriptions(section?: string): Promise<EmailSubscription[]> {
  try {
    const database = await connectToDatabase();
    const collection = database.collection('email_subscriptions');
    
    const filter = section ? { section } : {};
    const subscriptions = await collection
      .find(filter)
      .sort({ timestamp: -1 })
      .toArray();
    
    return subscriptions;
  } catch (error) {
    console.error('Failed to get email subscriptions:', error);
    return [];
  }
}

export async function unsubscribeEmail(email: string, section: string): Promise<boolean> {
  try {
    const database = await connectToDatabase();
    const collection = database.collection('email_subscriptions');
    
    const result = await collection.updateOne(
      { email: email.toLowerCase(), section },
      { $set: { status: 'unsubscribed' } }
    );
    
    return result.modifiedCount > 0;
  } catch (error) {
    console.error('Failed to unsubscribe email:', error);
    return false;
  }
}

export async function closeDatabaseConnection() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}
