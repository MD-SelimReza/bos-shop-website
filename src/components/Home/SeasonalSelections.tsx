import React from 'react';
import Image from 'next/image';

const SeasonalSelections = () => {
  return (
    <section className="flex flex-col gap-6 md:flex-row items-center justify-between px-4 py-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[500px] relative">
        <Image
          src="/banner-2.jpg"
          alt="Seasonal Selection"
          layout='fill'
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 flex flex-col items-end justify-center text-right space-y-3 text-black">
        <h2 className="text-3xl md:text-4xl xl:text-[40px] font-bold tracking-wide">
          SEASONAL SELECTIONS
        </h2>
        <p className="text-base md:text-lg">
          All our newest & current favorites
        </p>
      </div>
    </section>
  );
};

export default SeasonalSelections;
