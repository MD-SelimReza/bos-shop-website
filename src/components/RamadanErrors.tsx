// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const RamadanErrors = () => {
//   const errors = [
//     { id: 1, en: "Not making the intention for fasting" },
//     { id: 2, en: "Continuing to eat after the beginning of Fajr" },
//     { id: 3, en: "Delaying Zakaatul Fitr until after Eid Salah" },
//     { id: 4, en: "Reflecting Suhoor or having an early Suhoor" },
//     { id: 5, en: "Delaying the Iftar" },
//     { id: 6, en: "Reciting unauthentic Duas during Iftar" },
//     { id: 7, en: "Reciting the Dua of Iftar before breaking one's fast" },
//     { id: 8, en: "Eating excessively" },
//     { id: 9, en: "Not being mentally prepared for the fast" },
//     { id: 10, en: "Being negligent about the Taraweeh prayers" },
//     { id: 11, en: "Reciting the Quran very fast while rushing through the Taraweeh prayers" },
//     { id: 12, en: "Socializing during I'tikaf" },
//     { id: 13, en: "Assuming that Laylatul Qadr is exclusively on the 27th night of Ramadan" },
//     { id: 14, en: "Neglecting Duas and Istighfar (seeking forgiveness of Allah)" },
//     { id: 15, en: "Not reciting the Quran" },
//     { id: 16, en: "Wasting time" },
//     { id: 17, en: "Missing the Fard Salah" },
//     { id: 18, en: "Missing other Fard Salah" },
//     { id: 19, en: "Not giving Zakat" },
//     { id: 20, en: "Not calculating the Zakat properly" },
//     { id: 21, en: "Backbiting and slandering" },
//     { id: 22, en: "Engaging in false speech and lying" },
//     { id: 23, en: "Doing false actions" },
//     { id: 24, en: "Using abusive language" },
//     { id: 25, en: "Using vulgar language" },
//     { id: 26, en: "Listening to music and un-Islamic songs" },
//     { id: 27, en: "Watching un-Islamic TV programs and movies" },
//     { id: 28, en: "Reading un-Islamic magazines, books, and viewing un-Islamic pictures" },
//     { id: 29, en: "Browsing un-Islamic websites on the internet" },
//     { id: 30, en: "Spending extravagantly" },
//     { id: 31, en: "Wasting food" },
//     { id: 32, en: "Staying awake the whole night and sleeping during the day" },
//     { id: 33, en: "Being lazy and inactive during the day, which is contrary to the spirit of fasting" },
//     { id: 34, en: "Gossiping and engaging in futile discussions" },
//     { id: 35, en: "Killing time during the day by playing games and indulging in fruitless activities" },
//     { id: 36, en: "Spending extravagantly on lavish Iftar parties with the intention of showing off" },
//     { id: 37, en: "Spending time renovating houses and shops rather than remembering Allah" },
//     { id: 38, en: "Spending a great deal of time in the kitchen" },
//     { id: 39, en: "Excessive socializing after Taraweeh" },
//     { id: 40, en: "Spending most of the night shopping" },
//     { id: 41, en: "Spending most of the night eating" },
//     { id: 42, en: "Spending the night roaming and loitering about" },
//     { id: 43, en: "Not utilizing the opportunities of the last ten days and nights of Ramadan" },
//     { id: 44, en: "Not using the Miswak (tooth stick)" },
//     { id: 45, en: "Not sniffing water into the nostrils during Wudu" },
//   ];

//   const third = Math.ceil(errors.length / 3);
//   const firstColumn = errors.slice(0, third);
//   const secondColumn = errors.slice(third, third * 2);
//   const thirdColumn = errors.slice(third * 2);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
//       <div className="w-full max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-200">
//         <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
//           Common Mistakes During Ramadan
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
//           {/* Column 1 */}
//           <ul className="space-y-4">
//             {firstColumn.map((error) => (
//               <li
//                 key={error.id}
//                 className="flex items-start bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//               >
//                 <FaCheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
//                 <span className="text-gray-900 leading-snug">{error.en}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Column 2 */}
//           <ul className="space-y-4">
//             {secondColumn.map((error) => (
//               <li
//                 key={error.id}
//                 className="flex items-start bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//               >
//                 <FaCheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
//                 <span className="text-gray-900 leading-snug">{error.en}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Column 3 */}
//           <ul className="space-y-4">
//             {thirdColumn.map((error) => (
//               <li
//                 key={error.id}
//                 className="flex items-start bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//               >
//                 <FaCheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1" />
//                 <span className="text-gray-900 leading-snug">{error.en}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RamadanErrors;



import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const RamadanErrors = () => {
  const errors = [
    "রোজার নিয়ত না করা",
    "ফজরের শুরু হওয়ার পরেও খাওয়া চালিয়ে যাওয়া",
    "ঈদের সালাতের পর পর্যন্ত যাকাতুল ফিতর বিলম্বিত করা",
    "সেহরি প্রতিফলিত করা বা খুব তাড়াতাড়ি সেহরি করা",
    "ইফতারের সময় বিলম্ব করা",
    "ইফতারের সময় অপ্রমাণিত দুআ পাঠ করা",
    "রোজা ভাঙার আগে ইফতারের দুআ পাঠ করা",
    "অতিরিক্ত খাওয়া",
    "রোজার জন্য মানসিকভাবে প্রস্তুত না হওয়া",
    "তারাবীহের সালাত সম্পর্কে অবহেলা করা",
    "তারাবীহের সালাত দ্রুত শেষ করতে গিয়ে কুরআন দ্রুত পাঠ করা",
    "ইতিকাফের সময় সামাজিকতা করা",
    "লাইলাতুল কদর শুধুমাত্র রমজানের ২৭তম রাতে হওয়া ধরে নেওয়া",
    "দুআ ও ইস্তিগফার (আল্লাহর ক্ষমা প্রার্থনা) প্রতিফলিত না করা",
    "কুরআন তিলাওয়াত না করা",
    "সময় নষ্ট করা",
    "ফরজ সালাত মিস করা",
    "অন্যান্য ফরজ সালাত মিস করা",
    "যাকাত না দেওয়া",
    "যাকাত সঠিকভাবে গণনা না করা",
    "পরনিন্দা ও অপবাদ দেওয়া",
    "মিথ্যা কথা ও মিথ্যা বলা",
    "মিথ্যা কাজ করা",
    "অপমানজনক ভাষা ব্যবহার করা",
    "অশ্লীল ভাষা ব্যবহার করা",
    "গান ও অইসলামিক গান শোনা",
    "অইসলামিক টিভি প্রোগ্রাম ও চলচ্চিত্র দেখা",
    "অইসলামিক ম্যাগাজিন, বই পড়া ও অইসলামিক ছবি দেখা",
    "ইন্টারনেটে অইসলামিক ওয়েবসাইট ব্রাউজ করা",
    "অপচয় করা",
    "খাদ্য নষ্ট করা",
    "সারা রাত জেগে থাকা ও দিনে ঘুমানো",
    "দিনে অলস ও নিষ্ক্রিয় থাকা যা রোজার উদ্দেশ্যের বিপরীত",
    "গল্প করা ও অনর্থক আলোচনা করা",
    "খেলা ও অনর্থক কাজে সময় নষ্ট করা যা রোজার উদ্দেশ্যকে পরাজিত করে",
    "ইফতার পার্টিতে অপচয় করা, যাতে প্রদর্শনীর উদ্দেশ্য থাকে",
    "আল্লাহর স্মরণের পরিবর্তে ঘর ও দোকান সংস্কারে সময় কাটানো",
    "রান্নাঘরে অনেক সময় কাটানো",
    "তারাবীহের পর অতিরিক্ত সামাজিকতা করা",
    "রাতের বেশিরভাগ সময় কেনাকাটা করা",
    "রাতের বেশিরভাগ সময় খাওয়া",
    "রাতের বেশিরভাগ সময় ঘোরাফেরা করা",
    "রমজানের শেষ দশ দিন ও রাতের সুযোগ ব্যবহার না করা",
    "মিসওয়াক ব্যবহার না করা",
    "ওজুর সময় নাকে পানি না দেওয়া",
  ];

  // Split into three columns
  const third = Math.ceil(errors.length / 3);
  const firstColumn = errors.slice(0, third);
  const secondColumn = errors.slice(third, third * 2);
  const thirdColumn = errors.slice(third * 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 flex justify-center items-center">
      <div className="w-full max-w-[1440px] bg-white rounded-2xl shadow-xl p-8 border border-green-200">
        <h1 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
          রমজানে মুসলিমদের সাধারণ ভুল
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* First Column */}
          <ul className="space-y-3">
            {firstColumn.map((error, index) => (
              <li
                key={index}
                className="flex items-start bg-green-50 rounded-xl shadow-sm p-4 hover:bg-green-100 transition"
              >
                <FaCheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-800 text-base leading-relaxed">{error}</span>
              </li>
            ))}
          </ul>

          {/* Second Column */}
          <ul className="space-y-3">
            {secondColumn.map((error, index) => (
              <li
                key={index + third}
                className="flex items-start bg-green-50 rounded-xl shadow-sm p-4 hover:bg-green-100 transition"
              >
                <FaCheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-800 text-base leading-relaxed">{error}</span>
              </li>
            ))}
          </ul>

          {/* Third Column */}
          <ul className="space-y-3">
            {thirdColumn.map((error, index) => (
              <li
                key={index + third * 2}
                className="flex items-start bg-green-50 rounded-xl shadow-sm p-4 hover:bg-green-100 transition"
              >
                <FaCheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <span className="text-gray-800 text-base leading-relaxed">{error}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RamadanErrors;

// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const RamadanErrors = () => {
//     const errors = [
//         { id: 1, en: "Not making the intention for fasting", bn: "রোজার নিয়ত না করা" },
//         { id: 2, en: "Continuing to eat after the beginning of Fajr", bn: "ফজরের শুরু হওয়ার পরেও খাওয়া চালিয়ে যাওয়া" },
//         { id: 3, en: "Delaying Zakaatul Fitr until after Eid Salah", bn: "ঈদের সালাতের পর পর্যন্ত যাকাতুল ফিতর বিলম্বিত করা" },
//         { id: 4, en: "Reflecting Suhoor or having an early Suhoor", bn: "সেহরি প্রতিফলিত করা বা খুব তাড়াতাড়ি সেহরি করা" },
//         { id: 5, en: "Delaying the Iftar", bn: "ইফতারের সময় বিলম্ব করা" },
//         { id: 6, en: "Reciting unauthentic Duas during Iftar", bn: "ইফতারের সময় অপ্রমাণিত দুআ পাঠ করা" },
//         { id: 7, en: "Reciting the Dua of Iftar before breaking one's fast", bn: "রোজা ভাঙার আগে ইফতারের দুআ পাঠ করা" },
//         { id: 8, en: "Eating excessively", bn: "অতিরিক্ত খাওয়া" },
//         { id: 9, en: "Not being mentally prepared for the fast", bn: "রোজার জন্য মানসিকভাবে প্রস্তুত না হওয়া" },
//         { id: 10, en: "Being negligent about the Taraweeh prayers", bn: "তারাবীহের সালাত সম্পর্কে অবহেলা করা" },
//         { id: 11, en: "Reciting the Quran very fast while rushing through the Taraweeh prayers", bn: "তারাবীহের সালাত দ্রুত শেষ করতে গিয়ে কুরআন দ্রুত পাঠ করা" },
//         { id: 12, en: "Socializing during I'tikaf", bn: "ইতিকাফের সময় সামাজিকতা করা" },
//         { id: 13, en: "Assuming that Laylatul Qadr is exclusively on the 27th night of Ramadan", bn: "লাইলাতুল কদর শুধুমাত্র রমজানের ২৭তম রাতে হওয়া ধরে নেওয়া" },
//         { id: 14, en: "Reflecting Duas and Istighfar (seeking forgiveness of Allah)", bn: "দুআ ও ইস্তিগফার (আল্লাহর ক্ষমা প্রার্থনা) প্রতিফলিত না করা" },
//         { id: 15, en: "Not reciting the Quran", bn: "কুরআন তিলাওয়াত না করা" },
//         { id: 16, en: "Wasting time", bn: "সময় নষ্ট করা" },
//         { id: 17, en: "Missing the Fard Salah", bn: "ফরজ সালাত মিস করা" },
//         { id: 18, en: "Missing other Fard Salah", bn: "অন্যান্য ফরজ সালাত মিস করা" },
//         { id: 19, en: "Not giving Zakat", bn: "যাকাত না দেওয়া" },
//         { id: 20, en: "Not calculating the Zakat properly", bn: "যাকাত সঠিকভাবে গণনা না করা" },
//         { id: 21, en: "Backbiting and slandering", bn: "পরনিন্দা ও অপবাদ দেওয়া" },
//         { id: 22, en: "Engaging in false speech and lying", bn: "মিথ্যা কথা ও মিথ্যা বলা" },
//         { id: 23, en: "Doing false actions", bn: "মিথ্যা কাজ করা" },
//         { id: 24, en: "Using abusive language", bn: "অপমানজনক ভাষা ব্যবহার করা" },
//         { id: 25, en: "Using vulgar language", bn: "অশ্লীল ভাষা ব্যবহার করা" },
//         { id: 26, en: "Listening to music and un-Islamic songs", bn: "গান ও অইসলামিক গান শোনা" },
//         { id: 27, en: "Watching un-Islamic TV programs and movies", bn: "অইসলামিক টিভি প্রোগ্রাম ও চলচ্চিত্র দেখা" },
//         { id: 28, en: "Reading un-Islamic magazines, books, and viewing un-Islamic pictures", bn: "অইসলামিক ম্যাগাজিন, বই পড়া ও অইসলামিক ছবি দেখা" },
//         { id: 29, en: "Browsing un-Islamic websites on the internet", bn: "ইন্টারনেটে অইসলামিক ওয়েবসাইট ব্রাউজ করা" },
//         { id: 30, en: "Spending extravagantly", bn: "অপচয় করা" },
//         { id: 31, en: "Wasting food", bn: "খাদ্য নষ্ট করা" },
//         { id: 32, en: "Staying awake the whole night and sleeping during the day", bn: "সারা রাত জেগে থাকা ও দিনে ঘুমানো" },
//         { id: 33, en: "Being lazy and inactive during the day, which is contrary to the spirit of fasting", bn: "দিনে অলস ও নিষ্ক্রিয় থাকা যা রোজার উদ্দেশ্যের বিপরীত" },
//         { id: 34, en: "Gossiping and engaging in futile discussions", bn: "গল্প করা ও অনর্থক আলোচনা করা" },
//         { id: 35, en: "Killing time during the day by playing games and indulging in fruitless activities for fun and amusement, which defeats the purpose of fasting", bn: "খেলা ও অনর্থক কাজে সময় নষ্ট করা যা রোজার উদ্দেশ্যকে পরাজিত করে" },
//         { id: 36, en: "Spending extravagantly on lavish Iftar parties with the intention of showing off", bn: "ইফতার পার্টিতে অপচয় করা, যাতে প্রদর্শনীর উদ্দেশ্য থাকে" },
//         { id: 37, en: "Spending time renovating houses and shops rather than remembering Allah", bn: "আল্লাহর স্মরণের পরিবর্তে ঘর ও দোকান সংস্কারে সময় কাটানো" },
//         { id: 38, en: "Spending a great deal of time in the kitchen", bn: "রান্নাঘরে অনেক সময় কাটানো" },
//         { id: 39, en: "Excessive socializing after Taraweeh", bn: "তারাবীহের পর অতিরিক্ত সামাজিকতা করা" },
//         { id: 40, en: "Spending most of the night shopping", bn: "রাতের বেশিরভাগ সময় কেনাকাটা করা" },
//         { id: 41, en: "Spending most of the night eating", bn: "রাতের বেশিরভাগ সময় খাওয়া" },
//         { id: 42, en: "Spending the night roaming and loitering about", bn: "রাতের বেশিরভাগ সময় ঘোরাফেরা করা" },
//         { id: 43, en: "Not utilizing the opportunities of the last ten days and nights of Ramadan", bn: "রমজানের শেষ দশ দিন ও রাতের সুযোগ ব্যবহার না করা" },
//         { id: 44, en: "Not using the Miswak (tooth stick)", bn: "মিসওয়াক ব্যবহার না করা" },
//         { id: 45, en: "Not sniffing water into the nostrils during Wudu", bn: "ওজুর সময় নাকে পানি না দেওয়া" },
//       ];


//  // Split into 3 columns
//  const third = Math.ceil(errors.length / 3);
//  const firstColumn = errors.slice(0, third);
//  const secondColumn = errors.slice(third, third * 2);
//  const thirdColumn = errors.slice(third * 2);

//  return (
//    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
//      <div className="w-full max-w-screen-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-200">
//        <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
//          Common Mistakes During Ramadan <br /> রমজানে সাধারণ ভুলসমূহ
//        </h1>

//        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
//          {/* Column 1 */}
//          <ul className="space-y-4">
//            {firstColumn.map((error) => (
//              <li
//                key={error.id}
//                className="flex flex-col bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//              >
//                <div className="flex items-start mb-2">
//                  <FaCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
//                  <span className="text-gray-900 font-medium leading-snug">{error.bn}</span>
//                </div>
//                <p className="text-sm text-gray-600">{error.en}</p>
//              </li>
//            ))}
//          </ul>

//          {/* Column 2 */}
//          <ul className="space-y-4">
//            {secondColumn.map((error) => (
//              <li
//                key={error.id}
//                className="flex flex-col bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//              >
//                <div className="flex items-start mb-2">
//                  <FaCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
//                  <span className="text-gray-900 font-medium leading-snug">{error.bn}</span>
//                </div>
//                <p className="text-sm text-gray-600">{error.en}</p>
//              </li>
//            ))}
//          </ul>

//          {/* Column 3 */}
//          <ul className="space-y-4">
//            {thirdColumn.map((error) => (
//              <li
//                key={error.id}
//                className="flex flex-col bg-green-50 rounded-xl shadow p-4 hover:bg-green-100 transition"
//              >
//                <div className="flex items-start mb-2">
//                  <FaCheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1" />
//                  <span className="text-gray-900 font-medium leading-snug">{error.bn}</span>
//                </div>
//                <p className="text-sm text-gray-600">{error.en}</p>
//              </li>
//            ))}
//          </ul>
//        </div>
//      </div>
//    </div>
//  );
// };

// export default RamadanErrors;