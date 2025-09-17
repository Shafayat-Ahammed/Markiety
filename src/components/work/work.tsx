"use client";

import {
  type FunctionComponent,
  type JSX,
  type RefObject,
  useRef,
  useState,
} from "react";
import SectionHeader from "../section-header/section-header";
import SwiperType from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselButton from "../carousel-button/carousel-button";
import WorkLoadingSkeleton from "./work-loading-skeleton";
import CarouselButtonLoadingSkeleton from "../carousel-button/carousel-button-loading-skeleton";
import type { WorkType } from "./types";
import WorkItem from "./work-item";

const Work: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(true);

  const work: WorkType[] = [
    {
      title: "Oxydize - E-commerce SEO & Social Media Growth",
      description:
        "Markiety partnered with Oxydize, a D2C e-commerce brand, to enhance their online visibility and drive organic growth. We implemented a comprehensive SEO strategy and managed theirsocial media presence to increase brand awareness and sales.",
      summaryContents: (
        <>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Client:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Oxydize
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex flex-col gap-2">
            <div>
              <h5 className="text-white font-semibold">Services Provided:</h5>
            </div>
            <ul className="list-disc text-primary-gray ml-7 flex flex-col gap-1.5">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Management</li>
              <li>Content Strategy & Creation</li>
            </ul>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Status:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Ongoing Partnership
              </span>
            </h5>
          </li>
          <li>
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Key Achievement:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Successfully increased organic traffic by 40% in the first
                quarter.
              </span>
            </h5>
          </li>
        </>
      ),
      agreementUrl: "https://markiety.netlify.app/Obxydize_Agreement.pdf",
      invoiceUrl: "https://markiety.netlify.app/Obxydize_Payment_Invoice.pdf",
    },
    {
      title: "CP Five Star – Madhabdi: Billing Software & Digital Marketing",
      description:
        "Markiety delivered a custom-built billing software for CP Five Star Madhabdi and is now implementing targeted digital marketing strategies to drive in-store sales and enhance local presence.",
      summaryContents: (
        <>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Client:{" "}
              <span className="text-primary-gray font-normal ml-2">
                CP Five Star – Madhabdi Branch
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex flex-col gap-2">
            <div>
              <h5 className="text-white font-semibold">Services Provided:</h5>
            </div>
            <ul className="list-disc text-primary-gray ml-7 flex flex-col gap-1.5">
              <li>Custom Billing Software Development</li>
              <li>Digital Marketing Strategy</li>
            </ul>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Duration:{" "}
              <span className="text-primary-gray font-normal ml-2">
                29 May 2025 – 03 June 2025
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Status:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Software Delivered, Marketing Ongoing
              </span>
            </h5>
          </li>
        </>
      ),
      agreementUrl:
        "https://markiety.netlify.app/Markiety_CP_Five_Star_Agreement.pdf",
      invoiceUrl:
        "https://markiety.netlify.app/Markiety_CP_Five_Star_Invoice.pdf",
    },
    {
      title: "BSID Registration Data Entry - AKMCC",
      description:
        "The Markiety team successfully completed the BSID Registration Data Entry Project for 68 students of Abdul Kadir Mollah City College (AKMCC) with accuracy and professionalism.",
      summaryContents: (
        <>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Client:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Abdul Kadir Mollah City College (AKMCC)
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Project:{" "}
              <span className="text-primary-gray font-normal ml-2">
                BSID registration data entry
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Duration:{" "}
              <span className="text-primary-gray font-normal ml-2">
                9th May 2025 – 16th May 2025
              </span>
            </h5>
          </li>
          <li className="text-sm sm:text-base 2xl:text-[18.5px] flex gap-3">
            <h5 className="text-sm sm:text-base 2xl:text-[18.5px] text-white font-semibold">
              Status:{" "}
              <span className="text-primary-gray font-normal ml-2">
                Completed Successfully
              </span>
            </h5>
          </li>
        </>
      ),
      agreementUrl: "https://markiety.netlify.app/Markiety%20Agreement.pdf",
      invoiceUrl:
        "https://markiety.netlify.app/Markiety_Invoice_AKMCC_BSID.pdf",
    },
  ];

  return (
    <section id="work" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="our work"
          subtitle="Featured Project Completions"
          description="At Markiety, we take pride in the projects we’ve completed, each reflecting our commitment to creativity, strategy, and measurable results."
        />
        <div className="relative">
          {loading && (
            <div className="grid lg:grid-cols-2 gap-8 p-2.5 mb-18 2xl:mb-21.5">
              {[1, 2].map((_, index: number): JSX.Element => {
                return (
                  <div
                    key={index}
                    className={`${index === 1 ? "hidden lg:block" : ""}`}
                  >
                    <WorkLoadingSkeleton />
                  </div>
                );
              })}
            </div>
          )}
          <Swiper
            onSwiper={(swiper: SwiperType): void => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            slidesPerView={2}
            spaceBetween={32}
            autoplay={{
              delay: 500000000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="z-90 p-[10px_!important]"
            onAfterInit={(): void => {
              setLoading(false);
            }}
          >
            {!loading &&
              work.map(
                (
                  {
                    title,
                    description,
                    summaryContents,
                    agreementUrl,
                    invoiceUrl,
                  },
                  index: number
                ): JSX.Element => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="mb-18 2xl:mb-21.5 h-[auto_!important]"
                    >
                      <WorkItem
                        title={title}
                        description={description}
                        summaryContents={summaryContents}
                        agreementUrl={agreementUrl}
                        invoiceUrl={invoiceUrl}
                      />
                    </SwiperSlide>
                  );
                }
              )}
          </Swiper>

          <div className="absolute bottom-5 z-90 w-full flex justify-between">
            {loading &&
              [1, 2].map((_, index: number): JSX.Element => {
                return <CarouselButtonLoadingSkeleton key={index} />;
              })}
            {!loading &&
              [1, 2].map((_, index: number): JSX.Element => {
                return (
                  <CarouselButton
                    key={index}
                    label={index === 0 ? "prev" : "next"}
                    swiperRef={swiperRef}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
