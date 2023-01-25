import react from 'react';
import Footer from './Footer'


const RightSection = () => {
  return (
    <div className="flex h-full flex-1 flex-col md:pl-[50px] bg-indigo-50">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-lightBlack">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6">
              <h1 className="text-4xl text-black-100 font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16">
                ChatGPT
              </h1>
              <div className="md:flex items-start text-center gap-3.5">
                {[
                  {
                    title: "Examples",
                    subTitle: [
                      `"Explain quantum computing in simple terms" →`,
                      `"Got any creative ideas for a 10 year old’s birthday?" →`,
                      `"How do I make an HTTP request in Javascript?" →`,
                    ],
                    hover: true,
                  },
                  {
                    title: "Capabilities",
                    subTitle: [
                      `Remembers what user said earlier in the conversation`,
                      `Allows user to provide follow-up corrections`,
                      `Trained to decline inappropriate requests`,
                    ],
                    hover: false,
                  },
                  {
                    title: "Limitations",
                    subTitle: [
                      `May occasionally generate incorrect information`,
                      `May occasionally produce harmful instructions or biased content`,
                      `Limited knowledge of world and events after 2021`,
                    ],
                    hover: false,
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >
                    <h2 className="flex gap-3 text-black-100 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                      {item.icon}
                      {item.title}
                    </h2>
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subTitle, subTitleIndex) => (
                        <button
                          className={`w-full bg-gray-50 text-black-100 bg-white/5 p-3 rounded-md ${
                            item.hover
                              ? "hover:bg-gray-200 dark:hover:bg-gray-300 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subTitleIndex}
                        >
                          {subTitle}
                        </button>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RightSection;