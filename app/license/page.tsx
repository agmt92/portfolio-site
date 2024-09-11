import React from 'react';

export default function page() {
    return (
        <main>
            <article>
                <div className="p-6 lg:p-24  text-white dark:bg-neutral-100 dark:text-black">
                <h1 className="text-2xl font-bold mb-4">License</h1>
                    <p className="mb-4">Effective Date: [12.09.2024]</p>
                    <h2 className="text-xl font-semibold mb-2">License to Use Content</h2>
                    <p className="mb-4">
                        You are free to copy and redistribute the material on this website under the following conditions:
                        <ul className="list-disc list-inside ml-4">
                        <li>
                            <strong>Attribution:</strong> You must give appropriate credit to the author (Mohamed Tarek Abdelghani) and provide a link to this website and my Github account (https://github.com/agmt92). You may do so in any reasonable manner, but not in a way that suggests the licensor endorses you or your use.
                        </li>
                        </ul>
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Restrictions</h2>
                    <p className="mb-4">
                        You may not alter, transform, or build upon the material, except for editing personal information texts.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Non-Commercial Use</h2>
                    <p>The code of this website may be copied for personal use, but not for commercial purposes.</p>
                </div>
            </article>
        </main>
)};
