import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";

interface ServiceList {
  name: string;
  value: string;
}

const Contact: FunctionComponent = (): JSX.Element => {
  const serviceList: ServiceList[] = [
    { name: "Select a Service", value: "initial" },
    { name: "Digital Marketing Strategy", value: "digital marketing strategy" },
    { name: "Search Engine Optimization", value: "search engine optimization" },
    { name: "Social Media Marketing", value: "social media marketing" },
    { name: "Facebook & Google Ads", value: "facebook & google ads" },
    { name: "Content Creation", value: "content creation" },
    {
      name: "Website Design & Development",
      value: "website design & development",
    },
    { name: "Email Marketing", value: "email marketing" },
    { name: "Branding & Design", value: "branding & design" },
    { name: "Other", value: "other" },
  ];

  return (
    <section id="contact" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="get in touch"
          subtitle="Let’s Build Something Great Together"
          description="At Markiety, we’re always ready to connect — reach out today and let’s explore how we can grow your business together."
        />
        <div className="max-w-2xl 2xl:max-w-4xl mx-auto flex flex-col gap-8">
          <form className="text-white flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="full-name"
                className="font-semibold text-base sm:text-lg 2xl:text-xl"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="full-name"
                className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-primary-gray rounded-md px-4 2xl:px-5 py-3 2xl:py-4 outline-3 outline-primary-black focus:outline-primary-blue transition-colors text-sm sm:text-base 2xl:text-[18.5px]"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email-address"
                className="font-semibold text-base sm:text-lg 2xl:text-xl"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email-address"
                className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-primary-gray rounded-md px-4 2xl:px-5 py-3 2xl:py-4 outline-3 outline-primary-black focus:outline-primary-blue transition-colors text-sm sm:text-base 2xl:text-[18.5px]"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="service-list"
                className="font-semibold text-base sm:text-lg 2xl:text-xl"
              >
                Service Interested In:
              </label>
              <select
                id="service-list"
                className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-primary-gray rounded-md px-4 2xl:px-5 py-3 2xl:py-4 outline-3 outline-primary-black focus:outline-primary-blue transition-colors text-sm sm:text-base 2xl:text-[18.5px]"
              >
                {serviceList.map(
                  ({ name, value }, index: number): JSX.Element => {
                    return (
                      <option
                        key={index}
                        value={value}
                        className="bg-primary-black"
                      >
                        {name}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="font-semibold text-base sm:text-lg 2xl:text-xl"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-primary-gray rounded-md px-4 2xl:px-5 py-3 2xl:py-4 outline-3 outline-primary-black focus:outline-primary-blue transition-colors text-sm sm:text-base 2xl:text-[18.5px] resize-none"
                rows={6}
                placeholder="Type your message here..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary-blue border-7 border-primary-blue hover:border-blue-900 transition-colors text-white font-semibold px-[22px] pt-2 pb-2.5 rounded-lg cursor-pointer w-full"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center gap-2 text-center">
            <div>
              <p className="text-white font-bold text-sm sm:text-base 2xl:text-[18.5px] max-w-[840px]">
                Or, You Can Email Us:{" "}
                <a
                  target="_blank"
                  href="mailto:info.markiety@gmail.com"
                  className="text-primary-blue hover:underline"
                >
                  info.markiety@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base 2xl:text-[18.5px] max-w-[840px]">
                WhatsApp/Phone:{" "}
                <a
                  target="_blank"
                  href="https://wa.me/8801624547667"
                  className="text-primary-blue hover:underline"
                >
                  +880 1624 547667
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
