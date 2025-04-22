
import React from 'react';
import Layout from "@/components/layout/Layout";

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
            <p>
              Automind is committed to protecting the privacy and data of its users. We collect user details such as name, 
              email, and phone number via contact forms. We also gather general data through cookies and website analytics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Use of Data</h2>
            <p>
              Information is used to communicate with users, respond to inquiries, and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Data Sharing</h2>
            <p>
              We do not sell or rent user data. Information is only shared with authorized staff or service partners 
              required for operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Security</h2>
            <p>
              We employ modern security measures to protect personal information from unauthorized access, 
              loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              Our site may link to external services such as Instagram or Telegram. Their privacy practices may differ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">User Rights</h2>
            <p>
              You may request to access, modify, or delete your personal data at any time by contacting us.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
