'use client';

import React from 'react';

const authors = [
  {
    name: 'Asset Almas',
    role: 'Web Developer',
    photo: '/images/almas.jpg',
    instagram: 'https://instagram.com/almasezhe',
    telegram: 'https://t.me/almasezhe',
  },
  {
    name: 'Makash Adil',
    role: 'Designer',
    photo: '/images/adil.jfif',
    instagram: 'https://instagram.com/author2',
    telegram: 'https://t.me/author2',
  }
];

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 p-6 text-center text-white">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          "One child, one teacher, one book, one pen can change the world"
        </h1>
        <p className="text-lg mt-2">— Malala Yousafzai</p>
      </div>

      <hr className="my-6" />

      {/* About Us Section */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
  E-Physics was created to provide students with a{" "}
  <span className="text-blue-600 font-semibold">free, accessible, and interactive</span> way to learn physics at the{" "}
  <span className="text-green-500 font-semibold">high school level</span>.
</p>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          Our team of enthusiastic educators and developers is committed to making physics education engaging and impactful.
        </p>
      </div>

      {/* Authors Section */}
                {/* Authors Section */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
            {authors.map((author, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={author.photo}
                  alt={`${author.name}'s photo`}
                  className="rounded-full mb-4 w-36 h-36 object-cover"
                />
                <h2 className="text-xl font-bold">{author.name}</h2>
                <p className="text-gray-600 mb-4">{author.role}</p>
                <div className="flex space-x-4">
                  <a href={author.instagram} target="_blank" className="text-blue-500 hover:underline">
                  <img
                        src="/images/instagram.png" 
                        alt="Logo"
                        className="w-5 h-5 mb-2   " 
                    />
                  </a>
                  <a href={author.telegram} target="_blank" className="text-blue-500 hover:underline">
                  <img
                        src="/images/telegram.png" 
                        alt="Logo"
                        className="w-5 h-5 mb-2   " 
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 mt-auto text-center text-gray-500">
        © 2024 E-Physics. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUsPage;
