# Database Setup for Email Subscriptions

This guide explains how to set up the database to store user emails from different sections of the website.

## 🗄️ Database Configuration

### 1. Create `.env.local` file

Create a `.env.local` file in your project root with your database connection string:

```bash
# Database Configuration
DATABASE_URI=your_database_connection_string_here

# Example formats:
# MongoDB: mongodb://username:password@host:port/database
# PostgreSQL: postgresql://username:password@host:port/database
# MySQL: mysql://username:password@host:port/database

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 2. Install Dependencies

Install the MongoDB driver:

```bash
npm install mongodb
```

## 🚀 Database Setup

### MongoDB (Recommended)

1. **Install MongoDB** locally or use MongoDB Atlas (cloud)
2. **Create a database** named `amtop_website`
3. **Create a collection** named `email_subscriptions`

### Database Schema

The system automatically creates the following indexes for performance:

```javascript
// Collection: email_subscriptions
{
  email: "user@example.com",           // User's email (lowercase)
  section: "footer_newsletter",        // Which section the email came from
  timestamp: "2024-01-01T00:00:00Z",  // When the email was submitted
  ipAddress: "192.168.1.1",           // User's IP address
  userAgent: "Mozilla/5.0...",        // User's browser info
  source: "footer",                    // Source identifier
  status: "active"                     // Subscription status
}
```

## 📍 Email Collection Points

The system tracks emails from these sections:

### 1. Footer Newsletter (`footer_newsletter`)
- **Location**: Footer component
- **Source**: `footer`
- **Purpose**: Newsletter subscriptions

### 2. Contact Form (`contact_form`)
- **Location**: Contact page
- **Source**: `contact_page`
- **Purpose**: Contact form submissions

### 3. Hero Section (`hero_cta`)
- **Location**: Hero component (if you add email input)
- **Source**: `hero`
- **Purpose**: Hero call-to-action

### 4. Pricing Page (`pricing_signup`)
- **Location**: Pricing component (if you add email input)
- **Source**: `pricing`
- **Purpose**: Pricing page signups

## 🔧 API Endpoints

### POST `/api/subscribe`
Submit an email subscription:

```javascript
POST /api/subscribe
Content-Type: application/json

{
  "email": "user@example.com",
  "section": "footer_newsletter",
  "source": "footer"
}
```

**Response:**
```javascript
{
  "success": true,
  "message": "Email subscription successful",
  "section": "footer_newsletter",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### GET `/api/subscribe?section=footer_newsletter`
Check subscription endpoint status for a specific section.

## 🎯 Usage Examples

### Adding Email Collection to New Components

1. **Import the hook:**
```javascript
import { useEmailSubscription } from '@/utils/useEmailSubscription';
```

2. **Use in component:**
```javascript
const { subscribe, isLoading, error, success, reset } = useEmailSubscription();

const handleSubmit = async (email) => {
  await subscribe(email, 'new_section', 'component_name');
};
```

### Custom Email Validation

The API includes basic email validation, but you can add custom validation:

```javascript
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

## 📊 Database Queries

### Get All Subscriptions
```javascript
db.email_subscriptions.find({})
```

### Get Subscriptions by Section
```javascript
db.email_subscriptions.find({ section: "footer_newsletter" })
```

### Get Active Subscriptions
```javascript
db.email_subscriptions.find({ status: "active" })
```

### Get Recent Subscriptions
```javascript
db.email_subscriptions.find({}).sort({ timestamp: -1 }).limit(10)
```

## 🛡️ Security Features

- **Email validation** with regex pattern
- **Duplicate prevention** (updates existing subscriptions)
- **IP address tracking** for analytics
- **User agent logging** for debugging
- **Status management** (active/unsubscribed)

## 🚨 Troubleshooting

### Common Issues

1. **Connection Error**: Check your `DATABASE_URI` in `.env.local`
2. **Permission Error**: Ensure database user has read/write access
3. **Network Error**: Check firewall and network connectivity

### Debug Mode

Enable debug logging by checking the console for:
- Database connection status
- API request/response logs
- Error messages

## 📈 Analytics

Track email collection performance:

- **Section performance**: Which sections collect most emails
- **Time analysis**: When users are most likely to subscribe
- **Source tracking**: Identify most effective collection points
- **Conversion rates**: Email collection success rates

## 🔄 Future Enhancements

- **Email verification** system
- **Unsubscribe functionality**
- **Email marketing integration**
- **Analytics dashboard**
- **A/B testing support**
- **GDPR compliance tools**

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify database connection string
3. Ensure all dependencies are installed
4. Check network connectivity to database
