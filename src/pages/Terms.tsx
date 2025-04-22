
import React from 'react';
import Layout from "@/components/layout/Layout";

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-4">Use of Content</h2>
            <p>
              All materials, services, and content provided are the property of Automind and may not be reused 
              without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">User Conduct</h2>
            <p>
              By using our services, you agree not to misuse the platform, attempt unauthorized access, 
              or engage in activities that harm the platform or other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Service Availability</h2>
            <p>
              We do not guarantee uninterrupted access to our services and reserve the right to update 
              or discontinue features at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              Automind is not responsible for indirect damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Modifications</h2>
            <p>
              These terms may be updated periodically. Users will be notified of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
