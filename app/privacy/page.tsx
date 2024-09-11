import React from 'react';

export default function page() {
    return (
        <main>
            <article>
                <div className="p-6 lg:p-24  text-white dark:bg-neutral-100 dark:text-black">
                    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                    <p className="mb-4">Effective Date: [12.09.2024]</p>

                    <h2 className="text-xl font-semibold mb-2">Personal Information Collected</h2>
                    <p className="mb-4">No personal information is collected unless voluntarily provided by users through the contact form. This includes name, company, and email address.</p>

                    <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
                    <p className="mb-4">We do not use any third-party services on this website.</p>

                    <h2 className="text-xl font-semibold mb-2">Cookies Usage</h2>
                    <p className="mb-4">We do not collect cookies for advertising purposes. However, essential cookies may be used for performance and safety reasons. If applicable, these cookies may track the number of visitors to the site, but no personal data is collected.</p>

                    <h2 className="text-xl font-semibold mb-2">Purpose of Data Collection</h2>
                    <p className="mb-4">No data is collected unless voluntarily provided by the user.</p>

                    <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
                    <p className="mb-4">We do not share any data with third parties.</p>

                    <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                    <p className="mb-4">Any personal data provided by the user is stored locally and encrypted. We take all reasonable measures to ensure data security.</p>

                    <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
                    <p className="mb-4">Data is stored only until the end of the contract period or as otherwise specified. No unnecessary data is retained.</p>

                    <h2 className="text-xl font-semibold mb-2">User Rights</h2>
                    <p>Users can request the deletion or modification of their personal data at any time unless otherwise agreed upon in a contract. Data will not be shared or stored without the user’s explicit consent.</p>
                </div>
            </article>
        </main>
    
    );
}