import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: "How can I donate to support your cause?",
      answer: "You can donate through our secure online payment system via PayPal, or contact us directly for other donation methods including bank transfers and check donations."
    },
    {
      question: "What percentage of donations goes directly to helping children?",
      answer: "85% of all donations go directly to our programs supporting children. The remaining 15% is used for administrative costs and fundraising efforts to ensure our organization's sustainability."
    },
    {
      question: "How can I volunteer with your organization?",
      answer: "We offer various volunteering opportunities both locally and internationally. Visit our Volunteer page to learn about current opportunities and submit an application."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, all donations to the Orphan Life Foundation are tax-deductible. We are a registered 501(c)(3) nonprofit organization."
    },
    {
      question: "Can I sponsor a specific child or project?",
      answer: "Yes, we offer both child sponsorship programs and project-specific sponsorship opportunities. Contact us for more information about our sponsorship programs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6  shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Still Have Questions?</h2>
          <div className="bg-orange-50 p-6  mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">
               Continuing with the FAQs.tsx file content:

              Can't find the answer you're looking for? Our team is here to help! Reach out to us through any of the following methods:
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">info@orphanlife.org</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Office Hours</h4>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6  shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about/financial" className="text-orange-500 hover:text-orange-600">
                  Financial Information
                </a>
              </li>
              <li>
                <a href="/get-involved/volunteer" className="text-orange-500 hover:text-orange-600">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="/get-involved/support" className="text-orange-500 hover:text-orange-600">
                  Ways to Support
                </a>
              </li>
              <li>
                <a href="/media/blogs" className="text-orange-500 hover:text-orange-600">
                  Latest News & Updates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
