import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import type { ServiceType } from "./types";
import Service from "./service";

const Services: FunctionComponent = (): JSX.Element => {
  const services: ServiceType[] = [
    {
      name: "Digital Marketing Strategy",
      description:
        "We craft data-driven marketing strategies to boost your online presence, engage your audience, and drive conversions.",
    },
    {
      name: "Search Engine Optimization (SEO)",
      description:
        "Rank higher on Google with our proven SEO techniques—on-page optimization, keyword research, technical SEO, and link building.",
    },
    {
      name: "Social Media Marketing",
      description:
        "Grow your brand on platforms like Facebook, Instagram, and LinkedIn. We handle content, engagement, ads, and performance tracking.",
    },
    {
      name: "Facebook & Google Ads",
      description:
        "Maximize ROI with targeted advertising campaigns. We set up, manage, and optimize your ads for better visibility and conversions.",
    },
    {
      name: "Content Creation",
      description:
        "High-quality content for websites, blogs, and social media. We focus on storytelling that attracts, informs, and converts.",
    },
    {
      name: "Website Design & Development",
      description:
        "Modern, responsive websites that reflect your brand and drive action. Built with SEO and user experience in mind.",
    },
    {
      name: "Email Marketing",
      description:
        "Effective campaigns that nurture leads and retain customers. We design, write, and automate powerful email workflows.",
    },
    {
      name: "Branding & Design",
      description:
        "From logos to full brand kits, we create visual identities that leave a lasting impression.",
    },
  ];

  return (
    <section id="services" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="our services"
          subtitle="Digital Solutions to Help You Thrive"
          description="At Markiety, we offer a range of digital solutions to help businesses grow and thrive online. Our services are tailored to meet the unique needs of each client, ensuring maximum results and long-term success."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-8 sm:grid-rows-4 lg:grid-rows-3 xl:grid-rows-2 gap-4">
          {services.map(({ name, description }, index: number): JSX.Element => {
            return (
              <Service key={index} name={name} description={description} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
