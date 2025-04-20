"use client";

import Image from "next/image";

const Home = () => {
  return (
    <div>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-12 md:py-20">
              {/* Изображение */}
              <div className="md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-1/2 md:h-96">
            <Image
              src="/images/mainpage.png" // Поменяй на свою картинку
              alt="Students studying"
              layout="fill"
              objectFit="cover"
              className="rounded-[50%_50%_70%_30%/60%_40%_50%_50%]"
            />
          </div>
        </div>
      <div className="max-w-4xl flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Текстовая часть */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Get ready for the next{" "}
            <span className="text-blue-600">exam</span> with us!
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Our website offers the necessary information for learning and tests
            for physics preparation.
          </p>

          {/* Поле ввода + кнопка */}
          <div className="mt-6 flex justify-center md:justify-start space-x-2">
            <input
              type="text"
              placeholder="Find a lesson"
              className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              View
            </button>
          </div>
        </div>

        
      </div>
    
    </section>
    <footer className="bg-white p-4 shadow-md -mt-12">
        <div className="container mx-auto text-center text-gray-500">© 2024 E-Physics. All rights reserved.</div>
      </footer>
      </div>
  );
};

export default Home;
