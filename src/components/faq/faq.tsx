import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import type { FAQItemType } from "./types";
import FAQItem from "./faq-item";

const FAQ: FunctionComponent = (): JSX.Element => {
  const faqItems: FAQItemType[] = [
    {
      title: "1. What services does Markiety offer?",
      description:
        'We offer a wide range of digital marketing and creative services, including SEO, Facebook & Google Ads, social media marketing, website development, content creation, branding, and more. Visit our "Services" section for full details.',
    },
    {
      title: "2. How do I get started with Markiety?",
      description:
        "Simply contact us through our website or WhatsApp. We’ll schedule a short discussion to understand your goals and recommend the best service package for you.",
    },
    {
      title: "3. How much do your services cost?",
      description:
        "Our pricing depends on the type and scale of your project. We offer flexible packages to fit businesses of all sizes. After understanding your requirements, we’ll provide a clear, no-obligation quote.",
    },
    {
      title: "4. Can I see results from your work?",
      description:
        "Yes, absolutely. We provide detailed performance reports with every campaign, highlighting improvements in traffic, engagement, leads, or sales based on the services you choose.",
    },
    {
      title: "5. Do you work with clients outside Bangladesh?",
      description:
        "Yes! While we’re based in Bangladesh, we work with clients globally. All communication and deliverables are managed digitally for a seamless experience.",
    },
    {
      title: "6. How long does it take to see results?",
      description:
        "This depends on the service. For paid ads, results may be visible within days. SEO and organic growth strategies usually take 1–3 months for measurable impact. We ensure transparency at every stage.",
    },
    {
      title: "7. Is there a contract or long-term commitment?",
      description:
        "No long-term commitment is required unless you opt for a monthly plan. We believe in earning your trust through results, not by locking you in.",
    },
    {
      title: "8. Will you manage everything, or do I need to be involved?",
      description:
        "We handle everything — from strategy to execution. However, your input is always welcomed and encouraged, especially during onboarding and review stages.",
    },
  ];

  return (
    <section id="faq" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="frequently asked questions"
          subtitle="Any queries you have? Questions you may Ask"
          description="At Markiety, we’ve gathered answers to the most common questions to help you better understand our services and approach."
        />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full flex flex-col gap-8">
            {[faqItems[0], faqItems[2], faqItems[4], faqItems[6]].map(
              ({ title, description }, index: number): JSX.Element => {
                return (
                  <FAQItem
                    key={index}
                    title={title}
                    description={description}
                  />
                );
              }
            )}
          </div>
          <div className="w-full flex flex-col gap-8">
            {[faqItems[1], faqItems[3], faqItems[5], faqItems[7]].map(
              ({ title, description }, index: number): JSX.Element => {
                return (
                  <FAQItem
                    key={index}
                    title={title}
                    description={description}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
