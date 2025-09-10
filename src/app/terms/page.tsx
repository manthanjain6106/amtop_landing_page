import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfServicePage = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    }}>
      <Header />
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '80px 20px 40px 20px',
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 200px)'
      }}>
        {/* Header */}
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Terms and Conditions
          </h1>
          <p style={{ 
            fontSize: '14px', 
            color: '#5f6368',
            marginBottom: '8px'
          }}>
            Last updated: September 9, 2025
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#5f6368',
            marginBottom: '32px'
          }}>
            Effective date: September 9, 2025
          </p>
        </div>

        {/* Introduction */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            Welcome to amTop and our product, Agentic Marketing Solution (&quot;Service&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our platform and related services. By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, you must not use our Service.
          </p>
        </div>

        {/* Table of Contents */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          marginBottom: '40px',
          border: '1px solid #e8eaed'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            Contents
          </h2>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#eligibility" style={{ color: '#1a73e8', textDecoration: 'none' }}>1. Eligibility</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#services-provided" style={{ color: '#1a73e8', textDecoration: 'none' }}>2. Services Provided</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#user-responsibilities" style={{ color: '#1a73e8', textDecoration: 'none' }}>3. User Responsibilities</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#third-party-integrations" style={{ color: '#1a73e8', textDecoration: 'none' }}>4. Third-Party Integrations</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#intellectual-property" style={{ color: '#1a73e8', textDecoration: 'none' }}>5. Intellectual Property</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#fees-payment" style={{ color: '#1a73e8', textDecoration: 'none' }}>6. Fees and Payment</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#disclaimer-warranties" style={{ color: '#1a73e8', textDecoration: 'none' }}>7. Disclaimer of Warranties</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#limitation-liability" style={{ color: '#1a73e8', textDecoration: 'none' }}>8. Limitation of Liability</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#indemnification" style={{ color: '#1a73e8', textDecoration: 'none' }}>9. Indemnification</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#termination" style={{ color: '#1a73e8', textDecoration: 'none' }}>10. Termination</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#governing-law" style={{ color: '#1a73e8', textDecoration: 'none' }}>11. Governing Law and Dispute Resolution</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#changes-terms" style={{ color: '#1a73e8', textDecoration: 'none' }}>12. Changes to the Terms</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0' }}>
                  <a href="#contact" style={{ color: '#1a73e8', textDecoration: 'none' }}>13. Contact Us</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 1 */}
        <div id="eligibility" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            1. Eligibility
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            You must be at least 18 years old and have the authority to enter into this agreement on behalf of yourself or your organization. By using the Service, you represent and warrant that you meet these requirements.
          </p>
        </div>

        {/* Section 2 */}
        <div id="services-provided" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            2. Services Provided
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            Agentic Marketing Solution includes, but is not limited to:
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Automated ad campaign creation and management (currently integrated with Meta Ads)</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Organic growth and content management tools</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Audience sentiment analysis</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Integration with third-party analytics platforms (e.g., Google Analytics, Google Search Console, Facebook APIs)</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Competitive intelligence reporting</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Business white paper generation</li>
          </ul>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginTop: '16px'
          }}>
            We may add, modify, or remove features at our sole discretion.
          </p>
        </div>

        {/* Section 3 */}
        <div id="user-responsibilities" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            3. User Responsibilities
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            You agree to:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Provide accurate and complete account information</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Maintain the confidentiality of your login credentials</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Comply with all applicable laws and regulations when using our Service</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Ensure you have the rights to upload, share, or connect any content, accounts, or data with the Service</li>
          </ul>

          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            color: '#1a1a1a',
            marginBottom: '12px'
          }}>
            You must not:
          </h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Use the Service for unlawful, harmful, or fraudulent purposes</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Interfere with the Service&apos;s functionality or security</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Reverse engineer, copy, or resell the Service without authorization</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div id="third-party-integrations" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            4. Third-Party Integrations
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            Our Service connects with third-party platforms (Meta, Google, Facebook, etc.). By using these integrations, you authorize us to access and process data from these accounts. We are not responsible for availability, performance, or accuracy of third-party services. Your use of those services is subject to their own terms and policies.
          </p>
        </div>

        {/* Section 5 */}
        <div id="intellectual-property" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            5. Intellectual Property
          </h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>All content, software, and technology provided through the Service are owned by amTop and protected under applicable intellectual property laws</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>You retain rights to the content you upload, but grant us a limited, non-exclusive license to process it solely for providing the Service</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Reports, insights, and white papers generated by the Service may be used for your business purposes but may not be resold or redistributed without our consent</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div id="fees-payment" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            6. Fees and Payment
          </h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Certain features require a paid subscription</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Fees are disclosed at the time of purchase and are non-refundable unless otherwise stated</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>We may suspend or terminate your account for non-payment</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div id="disclaimer-warranties" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            7. Disclaimer of Warranties
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied. We do not guarantee that the Service will be error-free, uninterrupted, or produce specific results.
          </p>
        </div>

        {/* Section 8 */}
        <div id="limitation-liability" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            8. Limitation of Liability
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            To the maximum extent permitted by law:
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>amTop shall not be liable for indirect, incidental, special, or consequential damages arising out of your use of the Service</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Our total liability for any claim related to the Service shall not exceed the amount you paid for the Service in the twelve (12) months preceding the claim</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div id="indemnification" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            9. Indemnification
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            You agree to indemnify and hold harmless amTop, its officers, employees, and partners from any claims, liabilities, damages, or expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your infringement of third-party rights.
          </p>
        </div>

        {/* Section 10 */}
        <div id="termination" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            10. Termination
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            We may suspend or terminate your account if you violate these Terms, misuse the Service, or fail to pay applicable fees. You may terminate your account at any time by contacting us. Upon termination, your access to the Service will end, but certain obligations (e.g., payment, indemnification) will survive.
          </p>
        </div>

        {/* Section 11 */}
        <div id="governing-law" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            11. Governing Law and Dispute Resolution
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            These Terms are governed by the laws of [Insert Country/State]. Any disputes will be resolved in the courts of [Insert Jurisdiction], unless otherwise required by law.
          </p>
        </div>

        {/* Section 12 */}
        <div id="changes-terms" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            12. Changes to the Terms
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            We may update these Terms from time to time. Continued use of the Service after updates constitutes acceptance of the revised Terms.
          </p>
        </div>

        {/* Section 13 */}
        <div id="contact" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            13. Contact Us
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            If you have questions about these Terms, please contact:
          </p>

          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #e8eaed'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              amTop
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '8px' }}>
              Email: <a href="mailto:admin@amtop.in" style={{ color: '#1a73e8', textDecoration: 'none' }}>admin@amtop.in</a>
            </p>
            <p style={{ fontSize: '16px', color: '#1a1a1a', margin: 0 }}>
              Website: <a href="https://amtop.in" style={{ color: '#1a73e8', textDecoration: 'none' }}>amtop.in</a>
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfServicePage;