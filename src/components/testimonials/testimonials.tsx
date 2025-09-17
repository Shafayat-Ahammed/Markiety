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
import CarouselButtonLoadingSkeleton from "../carousel-button/carousel-button-loading-skeleton";
import TestimonialLoadingSkeleton from "./testimonial-loading-skeleton";
import Testimonial from "./testimonial";
import type { TestimonialType } from "./types";

const Testimonials: FunctionComponent = (): JSX.Element => {
  const swiperRef: RefObject<SwiperType | null> = useRef<SwiperType | null>(
    null
  );

  const [loading, setLoading] = useState<boolean>(true);

  const testimonials: TestimonialType[] = [
    {
      feedback:
        '"Markiety transformed our online presence! Their video strategy significantly boosted our engagement and leads. Highly recommended!"',
      clientName: "Jane Doe",
      clientCompany: "CEO of ExampleCorp",
    },
    {
      feedback:
        '"The team at Markiety is professional, data-driven, and truly understands video marketing. Our ad campaigns have never performed better."',
      clientName: "John Smith",
      clientCompany: "Marketing Manager at TechSolutions",
    },
    {
      feedback:
        '"Our social media content has soared since we partnered with Markiety. They created a vibrant community around our brand with amazing videos."',
      clientName: "Alice Brown",
      clientCompany: "Owner of Local Business",
    },
  ];

  return (
    <section id="testimonials" className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="what our clients say"
          subtitle="Hear From Our Clients"
          description="At Markiety, client satisfaction speaks louder than words — here’s what our partners have to say about working with us."
        />
        <div>
          <div className="relative">
            {loading && (
              <div className="grid lg:grid-cols-2 gap-8 p-2.5 mb-18 2xl:mb-21.5">
                {[1, 2].map((_, index: number): JSX.Element => {
                  return (
                    <div
                      key={index}
                      className={`${index === 1 ? "hidden lg:block" : ""}`}
                    >
                      <TestimonialLoadingSkeleton />
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
                testimonials.map(
                  (
                    { feedback, clientName, clientCompany },
                    index: number
                  ): JSX.Element => {
                    return (
                      <SwiperSlide
                        key={index}
                        className="mb-18 2xl:mb-21.5 h-[auto_!important]"
                      >
                        <Testimonial
                          feedback={feedback}
                          clientName={clientName}
                          clientCompany={clientCompany}
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
      </div>
    </section>
  );
};

export default Testimonials;
