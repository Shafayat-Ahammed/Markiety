import type { FunctionComponent, JSX, ReactElement } from "react";
import SectionHeader from "../section-header/section-header";
import Image from "next/image";

interface SocialChannel {
  icon: ReactElement<SVGSVGElement>;
  url: string;
}

const AboutFounder: FunctionComponent = (): JSX.Element => {
  const socialChannels: SocialChannel[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={40}
          height={40}
          className="hover:scale-105 transition-transform w-[35px] h-[35px] 2xl:w-[40px] 2xl:h-[40px]"
        >
          <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" />
        </svg>
      ),
      url: "https://tuhinkhandakar.netlify.app",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={40}
          height={40}
          className="hover:scale-105 transition-transform w-[35px] h-[35px] 2xl:w-[40px] 2xl:h-[40px]"
        >
          <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/tuhink-abir",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={40}
          height={40}
          className="hover:scale-105 transition-transform w-[35px] h-[35px] 2xl:w-[40px] 2xl:h-[40px]"
        >
          <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L258.2 544L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z" />
        </svg>
      ),
      url: "https://www.facebook.com/AbirSixT9",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={40}
          height={40}
          className="hover:scale-105 transition-transform w-[35px] h-[35px] 2xl:w-[40px] 2xl:h-[40px]"
        >
          <path d="M378 320.2L282.8 266.1L282.8 374.3L378 320.2zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM494.4 232.1C502 260.7 502 320.3 502 320.3C502 320.3 502 379.9 494.4 408.4C490.2 424.2 477.9 436.1 462.2 440.3C433.9 448 320 448 320 448C320 448 206.1 448 177.8 440.4C162.1 436.2 149.8 424.3 145.6 408.5C138 379.9 138 320.3 138 320.3C138 320.3 138 260.6 145.6 232.1C149.8 216.3 162.1 203.9 177.8 199.7C206.1 192 320 192 320 192C320 192 433.9 192 462.2 199.7C477.9 203.9 490.2 216.3 494.4 232.1z" />
        </svg>
      ),
      url: "https://www.youtube.com/@tuhin-khandakar",
    },
  ];

  return (
    <article id="about-founder" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="meet the visionary"
          subtitle="Our Founder & CEO"
          description="At Markiety, our vision is led by MD Tuhin Khandakar, Founder & CEO, whose passion for digital innovation drives everything we do."
        />
        <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-5 sm:p-10 cursor-default hover:scale-102 transition-transform flex flex-col lg:flex-row justify-center items-center gap-12">
          <Image
            src="/assets/ceo.jpg"
            alt="Markiety CEO"
            width={400}
            height={400}
            className="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] 2xl:w-[400px] 2xl:h-[400px] outline-4 outline-offset-0 outline-primary-blue"
          />
          <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start lg:justify-start gap-5 text-sm sm:text-base 2xl:text-[18.5px] text-primary-gray">
            <div className="flex flex-col gap-2">
              <h4 className="text-white font-bold text-3xl sm:text-4xl 2xl:text-[41px]">
                MD Tuhin Khandakar
              </h4>
              <h4 className="text-primary-blue font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl">
                Founder & CEO, Markiety
              </h4>
            </div>
            <div>
              <p>
                With a passion for digital innovation and a drive to empower
                businesses, MD Tuhin Khandakar established Markiety. He brings 4
                years of experience in the digital marketing landscape,
                specializing in Growth strategies, Content marketing, and SEO.
              </p>
            </div>
            <div>
              <p>
                Tuhin believes in a client-centric approach, ensuring that every
                strategy is not only data-driven but also perfectly aligned with
                the unique vision and goals of each partner. His leadership
                fosters a culture of creativity, excellence, and unwavering
                commitment to delivering measurable results and building
                long-lasting relationships.
              </p>
            </div>
            <div className="flex gap-3">
              {socialChannels.map(
                ({ icon, url }, index: number): JSX.Element => {
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      className="fill-primary-gray hover:fill-primary-blue transition-colors"
                    >
                      {icon}
                    </a>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutFounder;
