import React from "react";
// Assuming you have a common layout or can add this to a page
// import Footer from "./Footer"; // If you want to include the footer component

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F7F3EE] min-h-screen">
      {/* Hero / Header Section */}
      <div className="relative bg-[#EADECF] text-white py-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className=" section-heading text-4xl md:text-5xl font-bold py-20">Terms and Condition</h1>
        
        </div>
        {/* Decorative background element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#F7F3EE] to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 ">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-[#EDE7DF]">
          <p className="text-gray-700 leading-relaxed">
            Welcome to CODX Software Systems. These Terms and Conditions (“Terms”) govern your access to and use of our website (www.codxsoftwares.com) and any services, content, or digital products provided by CODX Software Systems (“we,” “our,” “us”).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please refrain from using our website or services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8 border border-[#EDE7DF] transition-all hover:shadow-md">
              <h2 className="text-2xl font-bold text-[#0D1F3C] mb-4 border-l-4 border-[#2ABFBF] pl-4">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Effective Date Note */}
        <div className="mt-12 text-center text-sm py-4 px-6 rounded-lg">
        </div>
      </div>

      {/* Optional: Include your Footer component here */}
      {/* <Footer /> */}
    </div>
  );
};

// Data for the sections to keep the JSX clean and maintainable
const sections = [
  {
    title: "1. Use of Our Website",
    content: (
      <>
        <p>You agree to use this website only for lawful purposes and in compliance with all applicable laws and regulations. You must not use this website in any way that may cause damage, impair availability, or interfere with others' use of the site.</p>
        <p className="font-medium text-[#0D1F3C] mt-2">You also agree not to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Attempt to gain unauthorized access to any part of the website or server.</li>
          <li>Upload malicious code, malware, or spam.</li>
          <li>Copy, modify, or distribute any content without prior written consent.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Intellectual Property Rights",
    content: (
      <p>
        All content on this website — including but not limited to text, images, logos, graphics, code, and design — is the intellectual property of CODX Software Systems or its licensors.
        You may not reproduce, redistribute, or commercially exploit any material from this site without explicit written permission from CODX Software Systems.
      </p>
    ),
  },
  {
    title: "3. Services and Pricing",
    content: (
      <>
        <p>CODX Software Systems offers services including but not limited to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Web and mobile app development</li>
          <li>Digital marketing and SEO</li>
          <li>Branding, design, and software consultation</li>
        </ul>
        <p>All pricing and service details are subject to change without prior notice. Any quotes or proposals shared are valid for a limited period and may vary based on project scope, timeline, and requirements.</p>
      </>
    ),
  },
  {
    title: "4. Client Responsibilities",
    content: (
      <>
        <p>When engaging our services, clients agree to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Provide accurate and complete project information.</li>
          <li>Review and approve deliverables within reasonable timeframes.</li>
          <li>Pay agreed fees on time as per the contract or invoice terms.</li>
        </ul>
        <p>CODX Software Systems reserves the right to pause or terminate services if payments are overdue or if the client breaches contractual terms.</p>
      </>
    ),
  },
  {
    title: "5. Limitation of Liability",
    content: (
      <>
        <p>While CODX Software Systems strives to provide the highest quality services, we do not guarantee that our website or services will be error-free, uninterrupted, or secure at all times.</p>
        <p>To the fullest extent permitted by law:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>CODX Software Systems shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</li>
          <li>Our total liability, in any case, shall not exceed the total amount paid to us for the specific service giving rise to the claim.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Third-Party Services and Links",
    content: (
      <p>
        Our website may contain links to third-party sites or use third-party tools. These are provided for convenience only.
        CODX Software Systems does not control, endorse, or assume responsibility for third-party content or services. Your use of any third-party site is at your own risk.
      </p>
    ),
  },
  {
    title: "7. Confidentiality",
    content: (
      <p>
        Both parties agree to maintain confidentiality regarding all project details, communications, and proprietary information exchanged during the course of work, unless disclosure is required by law.
      </p>
    ),
  },
  {
    title: "8. Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate access to our website or services, without prior notice, if we believe that you have violated these Terms or engaged in harmful or unlawful activity.
      </p>
    ),
  },
  {
    title: "9. Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless CODX Software Systems, its employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising out of your misuse of the website or violation of these Terms.
      </p>
    ),
  },
  {
    title: "10. Disclaimer",
    content: (
      <p>
        All content on this website is provided “as is” and “as available” without any warranties, express or implied.
        CODX Software Systems disclaims all warranties of merchantability, fitness for a particular purpose, or non-infringement.
      </p>
    ),
  },
  {
    title: "11. Governing Law",
    content: (
      <p>
        These Terms shall be governed and interpreted in accordance with the laws of United Arab Emirates, without regard to its conflict of law principles.
        Any disputes shall be subject to the exclusive jurisdiction of the courts in Dubai, UAE.
      </p>
    ),
  },
  {
    title: "12. Updates to These Terms",
    content: (
      <p>
        CODX Software Systems may revise or update these Terms from time to time to reflect changes in our business, legal requirements, or website functionality.
        All changes will be effective immediately upon posting to this page, and your continued use of the website indicates acceptance of those changes.
      </p>
    ),
  },
  {
    title: "13. Contact Us",
    content: (
      <div className="bg-[#EDE7DF] p-5 rounded-lg -mx-2">
        <p className="font-medium">If you have any questions or concerns about these Terms, please contact us at:</p>
        <p className="mt-2">
          <strong>CODX Software Systems</strong><br />
          📧 info@codxsoftwares.com<br />
          🌐 www.codxsoftwares.com
        </p>
      </div>
    ),
  },
];

export default TermsAndConditions;