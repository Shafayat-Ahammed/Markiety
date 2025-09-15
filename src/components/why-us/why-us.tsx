import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import Image from "next/image";
import WhyUsItem from "./why-us-item";

const WhyUs: FunctionComponent = (): JSX.Element => {
  const prosContents: string[] = [
    "Results-Driven Approach: We focus on measurable outcomes. Every strategy is data-backed and aimed at real growth.",
    "Personalized Solutions: No one-size-fits-all. We tailor services to your unique business needs and goals.",
    "Experienced Team: Skilled marketers, designers, developers, and strategists passionate about your success.",
    "Transparent Communication: We keep you informed at every step with honest updates and clear results.",
    "Affordable Pricing: Agency-level expertise with flexible packages for startups and growing businesses.",
    "Quick Turnaround: We value your time and deliver fast, without compromising on quality.",
    "Local Insight, Global Standards: Understanding the local market combined with global best practices.",
  ];

  const consContents: string[] = [
    "Unreliable Freelancers with slow turnarounds",
    "Generic strategies that fail to convert",
    "Lack of diverse expertise under one roof",
    "Vague reporting and hidden processes",
    "Overpriced services with little flexibility",
    "Slow delivery and missed deadlines",
    "Limited understanding of specific market needs",
  ];

  return (
    <section id="why-us" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="why choose us"
          subtitle="Delivering Results, Not Just Services"
          description="At Markiety, we don’t just offer services — we deliver results. Here’s why clients trust us to elevate their digital presence:"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-10 flex flex-col gap-10 cursor-default hover:scale-102 transition-transform">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src="/assets/logo.png"
                  alt="Markiety Logo"
                  width={75}
                  height={75}
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] 2xl:w-[75px] 2xl:h-[75px] rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-white font-bold text-3xl sm:text-4xl 2xl:text-[41px]">
                  Markiety
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {prosContents.map((prosContent, index: number): JSX.Element => {
                return (
                  <WhyUsItem key={index} type="pros" content={prosContent} />
                );
              })}
            </div>
          </div>

          <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-10 flex flex-col gap-10 hover:scale-102 transition-transform cursor-default">
            <div>
              <h2 className="text-white font-bold text-3xl sm:text-4xl 2xl:text-[41px]">
                Other Agencies
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              {consContents.map((consContent, index: number): JSX.Element => {
                return (
                  <WhyUsItem key={index} type="cons" content={consContent} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
