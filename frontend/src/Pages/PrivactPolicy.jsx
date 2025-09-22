import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-20 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Effective Date: 22/09/2025 | Last Updated: 20/09/2025
        </p>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Email address, password, and name when you create an account.</li>
            <li>Optional profile picture if you choose to upload one.</li>
            <li>Basic usage data (browser type, device info, interactions).</li>
          </ul>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">2. How We Use Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To create and manage your account.</li>
            <li>To allow you to share and interact with prompts.</li>
            <li>To improve services and maintain security.</li>
            <li>To communicate updates or important notices.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">3. Data Sharing</h2>
          <p className="text-gray-600">
            We do <span className="font-medium">not</span> sell your data. Information may only be shared with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Service providers (hosting, cloud storage) processing data on our behalf.</li>
            <li>Legal authorities if required by law or legal request.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">4. Data Storage and Security</h2>
          <p className="text-gray-600">
            Passwords are stored securely with industry-standard methods (e.g., hashing). 
            While we take precautions, no system is 100% secure.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">5. Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Update or delete account information anytime.</li>
            <li>Request access, correction, or deletion of your data.</li>
            <li>Remove an uploaded profile picture whenever you wish.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">6. Children’s Privacy</h2>
          <p className="text-gray-600">
            Our app is not intended for children under 13 (or the legal minimum age in your region). 
            We do not knowingly collect data from children.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">7. Changes</h2>
          <p className="text-gray-600">
            We may update this policy from time to time. Updates will be posted here with a new “Last Updated” date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">8. Contact Us</h2>
          <p className="text-gray-600">
            For questions about this Privacy Policy, contact us at:
          </p>
          <p className="text-gray-700 font-medium">Email: pranamshaw09@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
