import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F7F3EE] min-h-screen">
      {/* Hero / Header Section */}
      <div className="relative bg-[#EADECF] text-white py-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className=" section-heading text-4xl md:text-5xl font-bold py-20">Privacy Policy</h1>
         
        </div>
        {/* Decorative background element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#F7F3EE] to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-[#EDE7DF]">
          <p className="text-gray-700 leading-relaxed">
            At CODX Software Systems, we value your privacy and are fully committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website codxsoftwares.com or engage with our services.
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

       
      </div>
    </div>
  );
};

// Data for the sections to keep the JSX clean and maintainable
const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p className="font-medium text-[#0D1F3C]">We collect various types of information to deliver and improve our services.</p>
        
        <div className="mt-4">
          <h3 className="font-semibold text-[#0D1F3C]">1.1 Personal Information</h3>
          <p>You may voluntarily provide personal information to us when you interact with our website or contact us directly. This may include, but is not limited to:</p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Job Title</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-[#0D1F3C]">1.2 Non-Personal Information</h3>
          <p>We also collect certain non-identifiable data automatically when you visit our website, such as:</p>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>IP Address</li>
            <li>Browser Type and Version</li>
            <li>Device Information</li>
            <li>Pages Visited and Time Spent on Site</li>
            <li>Cookies and Tracking Data</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>CODX Software Systems may use the information we collect for the following purposes:</p>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>To operate, manage, and maintain our website and services</li>
          <li>To enhance website performance and user experience</li>
          <li>To respond to your inquiries, support requests, or feedback</li>
          <li>To send marketing communications (only if you have opted in)</li>
          <li>To detect and prevent fraud or security issues</li>
          <li>To comply with applicable laws and regulations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Share Your Information",
    content: (
      <>
        <p>We respect your privacy — CODX Software Systems does not sell or rent your personal data. However, we may share your information in the following circumstances:</p>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li><span className="font-medium">Service Providers:</span> With trusted third parties who assist us in website analytics, email communications, hosting, or marketing.</li>
          <li><span className="font-medium">Legal Requirements:</span> When disclosure is necessary to comply with legal obligations, regulations, or court orders.</li>
          <li><span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or corporate restructuring, your information may be transferred as part of that process.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <>
        <p>Our website uses cookies and similar tracking technologies to improve user experience and analyze site performance. These tools help us:</p>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Ensure proper website functionality</li>
          <li>Measure and improve performance metrics</li>
          <li>Provide personalized content and advertisements</li>
        </ul>
        <p className="mt-2">You can choose to disable cookies through your browser settings, though doing so may affect some website functionality.</p>
      </>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <>
        <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
        <p className="mt-2">While we strive to use industry-standard security practices, please note that no system can guarantee absolute protection.</p>
      </>
    ),
  },
  {
    title: "6. Your Rights and Choices",
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Access, correct, or delete your personal data</li>
          <li>Object to processing for direct marketing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please contact us at <span className="text-[#2ABFBF]">info@codxsoftwares.com</span>. We will respond to your request in accordance with applicable data protection laws.
        </p>
      </>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p>
        Our website may include links to third-party websites. CODX Software Systems is not responsible for the privacy policies, content, or practices of these external sites. We encourage you to review their respective privacy policies when visiting them.
      </p>
    ),
  },
  {
    title: "8. Updates to This Policy",
    content: (
      <p>
        CODX Software Systems may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons.
        Any modifications will be posted on this page with the updated “Last Updated” date.
      </p>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <div className="bg-[#EDE7DF] p-5 rounded-lg -mx-2">
        <p>If you have any questions, concerns, or complaints about this Privacy Policy or how we handle your personal information, please contact us at:</p>
        <p className="mt-2">
          <strong>CODX Software Systems</strong><br />
          📧 info@codxsoftwares.com<br />
          🌐 www.codxsoftwares.com
        </p>
      </div>
    ),
  },
];

export default PrivacyPolicy;