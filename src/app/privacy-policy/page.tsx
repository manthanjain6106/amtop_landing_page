import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
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
            Privacy Policy
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
            amTop (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates Agentic Marketing Solution, a platform that helps businesses create and manage advertisements automatically, grow their online presence organically, analyze audience sentiment, integrate with third-party analytics platforms, and generate competitive intelligence and business white papers.
          </p>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            This Privacy Policy explains how we collect, use, share, and protect your information when you use our services.
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
                  <a href="#information-we-collect" style={{ color: '#1a73e8', textDecoration: 'none' }}>1. Information We Collect</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#how-we-use" style={{ color: '#1a73e8', textDecoration: 'none' }}>2. How We Use Your Information</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#how-we-share" style={{ color: '#1a73e8', textDecoration: 'none' }}>3. How We Share Your Information</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#data-retention" style={{ color: '#1a73e8', textDecoration: 'none' }}>4. Data Retention</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#data-security" style={{ color: '#1a73e8', textDecoration: 'none' }}>5. Data Security</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#your-rights" style={{ color: '#1a73e8', textDecoration: 'none' }}>6. Your Rights</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#international-transfers" style={{ color: '#1a73e8', textDecoration: 'none' }}>7. International Data Transfers</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#children-privacy" style={{ color: '#1a73e8', textDecoration: 'none' }}>8. Children&apos;s Privacy</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e8eaed' }}>
                  <a href="#updates" style={{ color: '#1a73e8', textDecoration: 'none' }}>9. Updates to this Privacy Policy</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0' }}>
                  <a href="#contact" style={{ color: '#1a73e8', textDecoration: 'none' }}>10. Contact Us</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 1 */}
        <div id="information-we-collect" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            1. Information We Collect
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            We collect the following categories of information:
          </p>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              Information You Provide Directly
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Account details such as your name, email address, phone number, and company information</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Payment and billing information when you subscribe to our services</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Content you upload, including ad creatives, campaign settings, and business documents</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              Information Collected Automatically
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Usage data such as log files, IP addresses, browser type, operating system, and activity within our platform</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Device information such as identifiers, time zone, and language preferences</li>
            </ul>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              Information from Third-Party Integrations
            </h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Meta Ads (Facebook & Instagram Ads Manager) – ad performance, audience insights, and engagement data</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Google Analytics – website traffic, user behavior, and conversion metrics</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Google Search Console – keyword performance, impressions, and click-through rates</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Facebook APIs – page insights, audience sentiment, and content engagement metrics</li>
            </ul>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '12px'
            }}>
              Competitive Intelligence & Research Data
            </h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Publicly available market data</li>
              <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Reports, benchmarks, and comparisons relevant to your industry</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div id="how-we-use" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            2. How We Use Your Information
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            We use collected information to:
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Automate and optimize your ad campaigns</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Provide insights on audience sentiment and engagement</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Manage and schedule your content</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Generate analytics reports and white papers tailored to your business</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Improve, maintain, and secure our platform</li>
            <li style={{ marginBottom: '8px', fontSize: '16px', color: '#1a1a1a' }}>Communicate with you regarding updates, support, and promotions</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div id="how-we-share" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            3. How We Share Your Information
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            We do not sell your personal information. However, we may share your data in the following cases:
          </p>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '8px'
            }}>
              Service Providers and Partners
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Who assist in hosting, data processing, and analytics</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Data Shared: Limited to what&apos;s necessary for service delivery</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Safeguards: Strict data processing agreements and security requirements</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '8px'
            }}>
              Third-Party Integrations
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Meta, Google when you connect your accounts</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Data Shared: Only data necessary for integration functionality</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Safeguards: Your explicit consent and integration terms</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '8px'
            }}>
              Legal Compliance
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>When required by law, regulation, or court order</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Data Shared: Only what is legally required</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Safeguards: Legal review and minimal disclosure</p>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '8px'
            }}>
              Business Transfer
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>In case of merger, acquisition, or sale of assets</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '4px' }}>Data Shared: Subject to same privacy protections</p>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Safeguards: Continued compliance with this privacy policy</p>
          </div>
        </div>

        {/* Section 4 */}
        <div id="data-retention" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            4. Data Retention
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            We retain your information only as long as necessary to provide our services, comply with legal obligations, or resolve disputes. You may request deletion of your data at any time (see Your Rights below).
          </p>
        </div>

        {/* Section 5 */}
        <div id="data-security" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            5. Data Security
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            We use industry-standard safeguards to protect your information, including encryption, access controls, and secure data storage. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 6 */}
        <div id="your-rights" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            6. Your Rights
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            Depending on your jurisdiction, you may have the following rights:
          </p>

          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Access
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Access and obtain a copy of your personal data</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Correction
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Request correction or deletion of your information</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Deletion
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Request deletion of your personal data</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Restriction
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Restrict or object to certain processing activities</p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Withdraw Consent
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Withdraw consent for third-party integrations</p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '500', 
              color: '#1a1a1a',
              marginBottom: '4px'
            }}>
              Data Portability
            </h3>
            <p style={{ fontSize: '16px', color: '#1a1a1a' }}>Port your data to another service provider</p>
          </div>

          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid #e8eaed'
          }}>
            <p style={{ fontSize: '16px', color: '#1a1a1a', margin: 0 }}>
              To exercise these rights, contact us at <a href="mailto:admin@amtop.in" style={{ color: '#1a73e8', textDecoration: 'none' }}>admin@amtop.in</a>
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div id="international-transfers" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            7. International Data Transfers
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            If you are accessing our services from outside your country, your data may be transferred to and processed in countries with different data protection laws. We implement safeguards to ensure compliance with applicable regulations.
          </p>
        </div>

        {/* Section 8 */}
        <div id="children-privacy" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            8. Children&apos;s Privacy
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe a child has provided us data, please contact us for deletion.
          </p>
        </div>

        {/* Section 9 */}
        <div id="updates" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            9. Updates to this Privacy Policy
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a'
          }}>
            We may update this Privacy Policy periodically. The updated version will be posted with a new &quot;Last Updated&quot; date. Significant changes will be communicated to users.
          </p>
        </div>

        {/* Section 10 */}
        <div id="contact" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '400', 
            color: '#1a1a1a',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '1px solid #e8eaed'
          }}>
            10. Contact Us
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact:
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
              Website: <a href="https://amtop.in" style={{ color: '#1a73e8', textDecoration: 'none' }}>amTop.in</a>
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

export default PrivacyPolicyPage;
