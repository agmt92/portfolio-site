"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import MatrixRain from '@/app/ui/components/MatrixRain';

export default function ErrorPage() {
  const searchParams = useSearchParams();


  const formData = {
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    phone: searchParams.get('phone') || '',
    message: searchParams.get('message') || '',
  };


  const handleRetry = async () => {
    try {
      const response = await fetch(process.env.FORMSPREE_URL as string, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('There was a problem submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('There was a problem submitting the form.');
    }
  };


  const handleGoBack = () => {
    window.history.back();
  };


  const handleCopy = () => {
    const formText = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(formText);
    alert('Form data copied to clipboard!');
  };

  return (
    <div>
      <MatrixRain />
      <div className="absolute flex flex-col text-center top-1/4 left-0 w-full h-full z-10">
        <div className="col-start-2">
          <h1 className="text-6xl text-red-500 font-bold mb-4">Error</h1>
          <p className="text-white text-xl mb-8">There was an issue submitting your form!</p>
          <pre className="text-white text-left p-4 bg-black bg-opacity-50 rounded-md mb-4">{JSON.stringify(formData, null, 2)}</pre>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleRetry}
              className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Retry
            </button>
            <button
              onClick={handleGoBack}
              className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Go Back
            </button>
            <button
              onClick={handleCopy}
              className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
            >
              Copy Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}