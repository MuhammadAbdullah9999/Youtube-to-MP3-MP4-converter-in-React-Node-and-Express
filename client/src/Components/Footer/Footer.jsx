import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-sm">
              &copy; {currentYear} Your Company Name. All rights reserved.
            </p>
          </div>
          <div>
            {/* Add social media icons or other footer content */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
