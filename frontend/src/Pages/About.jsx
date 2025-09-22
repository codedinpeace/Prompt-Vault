import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-20 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          About PromptVault
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Welcome to <span className="font-semibold">PromptVault</span>, 
          a community-driven platform designed to help you discover, 
          share, and organize prompts across multiple categories.
        </p>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600">
            At PromptVault, our mission is simple — to become your go-to 
            library of ideas. We make it easy for creators, learners, and 
            professionals to access high-quality prompts for writing, coding, 
            education, business, and more.
          </p>
        </section>

        <section className="space-y-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700">What We Offer</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>A curated collection of categorized prompts for every need.</li>
            <li>Simple tools to copy prompts with one click.</li>
            <li>An option for users to contribute and grow the vault.</li>
            <li>A clean, organized, and distraction-free experience.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Our Vision</h2>
          <p className="text-gray-600">
            We believe that great ideas should be accessible to everyone. 
            With PromptVault, we aim to build a global hub where creativity, 
            productivity, and learning come together — one prompt at a time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
