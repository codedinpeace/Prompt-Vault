import React from "react";

const Licensing = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-20 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Licensing
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          All content and prompts available on <span className="font-semibold">PromptVault</span> are 
          subject to the following licensing terms. By using our platform, 
          you agree to these terms.
        </p>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">1. User Contributions</h2>
          <p className="text-gray-600">
            Any prompts or content you submit to PromptVault remain your property, 
            but by contributing, you grant us a worldwide, non-exclusive, royalty-free license 
            to display, distribute, and make the content available to other users.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">2. Personal Use</h2>
          <p className="text-gray-600">
            You may use any prompt from PromptVault for personal, educational, 
            or professional purposes. You may modify or adapt prompts for your own use.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">3. Restrictions</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Do not resell or redistribute prompts as a standalone product.</li>
            <li>Do not claim authorship of prompts created by others.</li>
            <li>Do not use the platform for illegal or unethical purposes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">4. Changes to Licensing Terms</h2>
          <p className="text-gray-600">
            PromptVault reserves the right to update or modify these licensing terms 
            at any time. Changes will be posted on this page with the latest “Last Updated” date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Licensing;
