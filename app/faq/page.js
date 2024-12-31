'use client'; // If you're using client-side hooks (like useState)

import { useState } from 'react';

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-pink-300 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          🐱 FAQs - Your Questions About Smalls
        </h2>

        <div className="space-y-4">
          <div className="accordion-item">
            <div className="cursor-pointer bg-yellow-500 text-white p-4 rounded-lg shadow-md" onClick={() => toggleAccordion(0)}>
              <h3 className="text-xl font-semibold">What makes Smalls different from other cat foods?</h3>
            </div>
            {activeIndex === 0 && (
              <div className="p-4 bg-yellow-100 text-gray-700 rounded-b-lg shadow-inner">
                Smalls offers a natural, high-quality, protein-rich diet made with real meat. Its free from fillers and artificial ingredients, unlike many commercial cat foods.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="cursor-pointer bg-yellow-500 text-white p-4 rounded-lg shadow-md" onClick={() => toggleAccordion(1)}>
              <h3 className="text-xl font-semibold">Is Smalls safe for kittens?</h3>
            </div>
            {activeIndex === 1 && (
              <div className="p-4 bg-yellow-100 text-gray-700 rounded-b-lg shadow-inner">
                Yes, Smalls is safe for kittens. Our food is rich in protein and essential nutrients, which helps in healthy growth and development.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="cursor-pointer bg-yellow-500 text-white p-4 rounded-lg shadow-md" onClick={() => toggleAccordion(2)}>
              <h3 className="text-xl font-semibold">How should I transition my cat to Smalls?</h3>
            </div>
            {activeIndex === 2 && (
              <div className="p-4 bg-yellow-100 text-gray-700 rounded-b-lg shadow-inner">
                We recommend gradually transitioning your cat to Smalls over a week. Start by mixing a small portion of Smalls with your cats current food and gradually increase the amount.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="cursor-pointer bg-yellow-500 text-white p-4 rounded-lg shadow-md" onClick={() => toggleAccordion(3)}>
              <h3 className="text-xl font-semibold">What flavors does Smalls offer?</h3>
            </div>
            {activeIndex === 3 && (
              <div className="p-4 bg-yellow-100 text-gray-700 rounded-b-lg shadow-inner">
                Smalls offers a variety of delicious flavors such as chicken, turkey, beef, and fish, all designed to cater to your cats preferences.
              </div>
            )}
          </div>

          <div className="accordion-item">
            <div className="cursor-pointer bg-yellow-500 text-white p-4 rounded-lg shadow-md" onClick={() => toggleAccordion(4)}>
              <h3 className="text-xl font-semibold">Can I order Smalls online?</h3>
            </div>
            {activeIndex === 4 && (
              <div className="p-4 bg-yellow-100 text-gray-700 rounded-b-lg shadow-inner">
                Yes! You can easily order Smalls online through our website and have it delivered right to your door.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
