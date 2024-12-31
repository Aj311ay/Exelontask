import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai'; // Importing an arrow icon from react-icons

export default function Page() {
  return (
    <div className="bg-green-100 min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center px-6 py-4 bg-green-100">
        <h1 className="text-2xl font-bold">🐾 SMALLS</h1>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Fav (2)</a>
          <a href="#" className="hover:underline">Cart (1)</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="p-0">
        <section className="bg-green-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Voted #1 Healthiest Cat Food 🐱🥩
          </h2>
          <p className="text-gray-600 mb-6">100% Healthy and Quality Full</p>

          {/* Image Section */}
          <div className="flex justify-center space-x-4 relative">
            {/* Links Section on the left of the yellow image */}
            <div className="absolute top-[50%] left-0 transform -translate-y-1/2 flex flex-col space-y-2 items-start ml-[20px]">
            <a href="#" className="flex items-center space-x-2 text-gray-700 hover:underline">
                <span>Why Smalls?</span>
                <AiOutlineRight className="text-sm" />
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-800 hover:underline">
                <span>Behind Our Food</span>
                <AiOutlineRight className="text-sm" />
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-800 hover:underline">
                <span>Small Reviews</span>
                <AiOutlineRight className="text-sm" />
              </a>
              <a href="/faq" className="flex items-center space-x-2 text-gray-800 hover:underline">
                <span>FAQs</span>
                <AiOutlineRight className="text-sm" />
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-800 hover:underline">
                <span>Stores</span>
                <AiOutlineRight className="text-sm" />
              </a>
            </div>

            {/* Yellow Image */}
            <div>
              <Image
                src="/yellow.png" // Replace with your image path
                alt="Yellow Food Bag"
                width={200}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="absolute bottom-[-40px] left-[40%] transform translate-x-[-50%] flex items-center space-x-2 text-gray-700 hover:underline">
    <a href="#" className="flex items-center space-x-2">
      <span>View All</span>
      <AiOutlineRight className="text-sm" />
    </a>
  </div>

            {/* Orange Image */}
            <div className="relative top-[60px]">
              <Image
                src="/orange.png" // Replace with your image path
                alt="Orange Food Bag"
                width={200}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start ml-15 mt-8"> {/* Added margin-left and margin-top */}
    {/* Tick Mark Image */}
    <div className="mb-2">
      <Image
        src="/tick.png" // Replace with your tick mark image path
        alt="Tick Mark"
        width={24} // Adjust size as needed
        height={24} // Adjust size as needed
      />
    </div>

    {/* Text */}
    <p className="text-gray-800 text-lg">
      Experience a peace of<br /> Mind with Our Customer<br /> Protection Service
    </p>
  </div>
</div>
  

          <div className="absolute top-[60%] left-0 transform -translate-y-1/2 flex flex-col space-y-2 items-start ml-[70px]">
          <button className="bg-black text-white py-2 px-6 rounded-full text-sm flex items-center justify-center hover:bg-gray-800">
    Watch Video
  </button>
          </div>
        </section>
        

        {/* Statistics Section */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
  <h3 className="text-2xl text-gray-800 mb-4 inline-flex items-center justify-center">
    88% OF CUSTOMERS 🐾 REPORT HEALTH IMPROVEMENTS AFTER SWITCHING
    {/* Cat Image between the words */}
    <div className="mx-2">
      <Image
        src="/cat.png" // Replace with your cat image path
        alt="Cat"
        width={70} // Adjust the size as needed
        height={70} // Adjust the size as needed
        className="rounded-full"
      />
    </div>
    TO SMALLS
  </h3>
</section>

<section className="bg-white p-6 rounded-lg shadow-md mt-4">
  <p className="text-gray-600 font-bold text-center">
    Other brands pack their products with carbohydrates, preservatives, and harmful
    artificial ingredients.
  </p>
  
  {/* Image below the text, centered */}
  <div className="mt-4 flex justify-center items-center">
    <Image
      src="/all.png" // Replace with your image path
      alt="All Image"
      width={400} // Adjust the size as needed
      height={400} // Adjust the size as needed
    />
  </div>
</section>

      </main>
    </div>
  );
}
