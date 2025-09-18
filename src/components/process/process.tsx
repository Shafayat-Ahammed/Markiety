import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import type { ProcessItemType } from "./types";
import ProcessItem from "./process-item";

const Process: FunctionComponent = (): JSX.Element => {
  const processItems: ProcessItemType[] = [
    {
      stepNumber: 1,
      title: "Discovery & Deep Understanding",
      description:
        "Before we begin any project, we take time to thoroughly understand your brand, your industry, your target audience, and your goals.",
      steps: [
        "Market and competitor research",
        "Brand analysis & Customer personas",
      ],
      summary: "Aligning strategy with your vision for success.",
      bannerUrl: "/assets/discovery-and-deep-understanding.svg",
    },
    {
      stepNumber: 2,
      title: "Strategic Planning",
      description:
        "Based on insights, we craft a custom strategy tailored to your specific needs, defining objectives, KPIs, and channels.",
      steps: ["Objective & KPI Definition", "Channel Selection & Timeline"],
      summary: "Purposeful and goal-driven actions.",
      bannerUrl: "/assets/strategic-planning.svg",
    },
    {
      stepNumber: 3,
      title: "Creative Execution",
      description:
        "Our team brings the strategy to life with expert execution in content creation, ad management, or web development.",
      steps: [
        "Engaging Creatives & Compelling Copy",
        "Optimized Web Interfaces",
      ],
      summary: "Quality work, delivered fast.",
      bannerUrl: "/assets/creative-execution.svg",
    },
    {
      stepNumber: 4,
      title: "Monitoring & Optimization",
      description:
        "We monitor performance in real-time, making necessary adjustments with A/B testing to improve results and maximize ROI.",
      steps: ["Performance Reporting", "Continuous A/B Testing"],
      summary: "Constantly refining for better results.",
      bannerUrl: "/assets/monitoring-and-optimization.svg",
    },
    {
      stepNumber: 5,
      title: "Delivery, Reporting & Growth",
      description:
        "We keep you informed, review deliverables, measure success, and discuss opportunities for future scaling and growth.",
      steps: ["Detailed Progress Reports", "ROI Analysis & Strategy Upgrades"],
      summary: "Building long-term growth partnerships.",
      bannerUrl: "/assets/delivery-reporting-and-growth.svg",
    },
  ];

  return (
    <section id="process" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="our process"
          subtitle="Our Strategy To Get You Leads With Content"
          description="At Markiety, our process is built to simplify complexity — turning data-driven strategies into clear steps that deliver measurable growth."
        />
        <div className="relative flex flex-col gap-8">
          {processItems.map(
            (
              { stepNumber, title, description, steps, summary, bannerUrl },
              index: number
            ): JSX.Element => {
              return (
                <ProcessItem
                  key={index}
                  stepNumber={stepNumber}
                  title={title}
                  description={description}
                  steps={steps}
                  summary={summary}
                  bannerUrl={bannerUrl}
                />
              );
            }
          )}
          <div className="absolute w-1 h-full bg-[#111111] top-0 left-0 lg:left-1/2 -translate-x-1/2 z-89 hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Process;
