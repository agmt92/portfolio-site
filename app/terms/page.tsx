import React from "react";

export default function Page() {
    return (
      <main className="flex flex-col">
          <article>
          <div className="p-6 lg:p-24  text-white dark:bg-neutral-100 dark:text-black">
          <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
                <p className="mb-4">Effective Date: [12.09.2024]</p>

                <h2 className="text-xl font-semibold mb-2">Website Purpose</h2>
                <p className="mb-4">This website serves as a personal portfolio for showcasing my work.</p>

                <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
                <p className="mb-4">There are no eligibility restrictions for accessing this website.</p>

                <h2 className="text-xl font-semibold mb-2">Prohibited User Actions</h2>
                <p className="mb-4">Users are prohibited from copying the website content without permission. Any reproduction of the website must be done with proper attribution, and no alterations may be made to the content except for personal information texts.</p>

                <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
                <p className="mb-4">All content on this website is my intellectual property. Users may copy the content under the Creative Commons Attribution (CC BY) license, provided they give proper credit. However, they may not alter the content, aside from personal info texts.</p>

                <h2 className="text-xl font-semibold mb-2">Disclaimers</h2>
                <p className="mb-4">Attribution is required for any reuse of the content, including the author&apos;s name, the website URL, and other relevant details.</p>

                <h2 className="text-xl font-semibold mb-2">Right to Terminate</h2>
                <p className="mb-4">As the owner of this website, I reserve the right to terminate or restrict access to any user at any time, as no services are provided directly through this site.</p>

                <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
                <p>This website is governed by the laws of the European Union and Austria.</p>
            </div>
          </article>
      </main>
    );
  }