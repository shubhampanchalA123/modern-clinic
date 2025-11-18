"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function VideoReels() {
  const videos = [
    "https://www.youtube.com/embed/i68ljuyMjbk",
    "https://www.youtube.com/embed/8k-CD4lztEM",
    "https://www.youtube.com/embed/U1-4SOKMxJs",
    "https://www.youtube.com/embed/bdvpof0PtDA",
    "https://www.youtube.com/embed/AUBAwNpiB5Q",
    "https://www.youtube.com/embed/NVYv-fICFEY",
    "https://www.youtube.com/embed/5aIAQUhPS2M",
    "https://www.youtube.com/embed/P8LMW9FOIIU",
    "https://www.youtube.com/embed/J7MSFHKSiB4",
    "https://www.youtube.com/embed/dOktKNstcE4",
    "https://www.youtube.com/embed/K9HxeFSyk40",
    "https://www.youtube.com/embed/KMlQbpd6T2c",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
        Real People. Real Stories.
      </h2>

      <div className="relative">

        {/* LEFT ARROW */}
        <div
          className="
            swiper-button-prev 
            !left-0 !z-20 !w-12 !h-12
            !rounded-full 
            !shadow-xl 
            !flex !items-center !justify-center
            after:!text-3xl after:!text-foreground
          "
        ></div>

        {/* Scrollable Wrapper */}
        <div className="overflow-x-auto no-scrollbar py-2">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={16}
            slidesPerView={"auto"}
            grabCursor={true}
            className="!overflow-visible"
          >
            {videos.map((src, i) => (
              <SwiperSlide
                key={i}
                className="!w-[260px] sm:!w-[300px] !mr-4"
              >
                <div className="
                  w-full h-[200px] 
                  rounded-xl 
                  overflow-hidden 
                  shadow-lg 
                  bg-card 
                  border border-border
                ">
                  <iframe
                    className="w-full h-full"
                    src={`${src}?rel=0`}
                    title={`video-${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT ARROW */}
        <div
          className="
            swiper-button-next 
            !right-0 !z-20 !w-12 !h-12
            !rounded-full 
            !shadow-xl
            !flex !items-center !justify-center
            after:!text-3xl after:!text-foreground
          "
        ></div>
      </div>
    </section>
  );
}
