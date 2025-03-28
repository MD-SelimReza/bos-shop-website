import React, { JSX } from "react";

type IconItem = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
};

const iconsData: IconItem[] = [
  {
    id: 1,
    title: "Free Standard Shipping",
    description: "in the U.S. with minimum $5 purchase",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="w-12 h-12 text-gray-800"
        viewBox="0 0 82 82"
        fill="none"
        stroke="currentColor"
      >
        <path d="M7.238 68.717H1.867V2.12H58.4v16.736h3.886c9.755 0 17.663 7.908 17.663 17.663v32.199h-5.917M55.781 68.717H25.487" />
        <path d="M58.334 42.124h15.068v-4.27c0-6.82-5.53-12.35-12.351-12.35h-2.718v16.62M73.909 70.236a9.125 9.125 0 1 0-18.013-2.931 9.125 9.125 0 0 0 18.013 2.93ZM25.367 70.235a9.125 9.125 0 1 0-18.012-2.931 9.125 9.125 0 0 0 7.54 10.471 9.125 9.125 0 0 0 10.472-7.54Z" />
        <path d="M13.723 77.507c-3.966.658-7.937 1.51-11.857 2.593M60.373 76.736c-10.512-1.212-24.298-1.969-38.645-.451M79.768 80.121s-4.96-1.222-12.975-2.395" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Returns",
    description: "within 60 days of purchase",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="w-12 h-12 text-gray-800"
        viewBox="0 0 82 82"
        fill="none"
        stroke="currentColor"
      >
        <path d="M28.405 48.928S44.542 23.912 75.372 2.55c2.763-1.915 6.046 1.572 3.979 4.234-13.918 17.921-37.073 49.81-43.093 70.8-.782 2.728-4.346 3.291-5.927.941C25.63 71.543 17 60.565 3.384 49.668c-2.359-1.888-1.617-5.774 1.574-6.211 5.206-.714 13.211-.483 23.447 5.471Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "12% Given Annually",
    description: "to Outreach Efforts Across the Globe",
    icon: (
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="w-12 h-12 text-gray-800"
        viewBox="0 0 82 82"
        fill="none"
        stroke="currentColor"
      >
        <path d="M55.751 44.921c8.592-14.035 27.427-4.617 23.788 11.287C75.978 71.77 55.751 80 55.751 80s-20.229-8.23-23.788-23.792c-3.639-15.904 15.194-25.323 23.788-11.287Z" />
        <path d="M73.656 40.142c.047-.751.071-1.509.071-2.272C73.726 18.06 57.67 2 37.863 2S2 18.06 2 37.87c0 19.811 16.056 35.87 35.863 35.87a36.13 36.13 0 0 0 6.006-.501" />
        <path d="M27.249 3.637s10.498 7.661 5.503 14.39c-4.995 6.729-5.912 8.462-6.218 14.987-.306 6.525-1.771 19.86-21.425 19.207M52.176 5.104s-11.495 5.174-8.539 12.719c2.956 7.544 7.819 3.101 12.13 7.035 5.81 5.302 12.48 3.658 15.937 1.725" />
      </svg>
    ),
  },
];

const IconsRow: React.FC = () => {
  return (
    <section
      id="IconsRow"
      className="py-16 bg-white"
      aria-label="Key Selling Points"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {iconsData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center max-w-[250px] mx-auto ${
                index === 2 ? "col-span-2 md:col-span-1 flex justify-center !max-w-[250px]" : ""
              }`}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                {item.icon}
              </div>
              <h3 className="md:text-lg font-medium tracking-wide text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsRow;
