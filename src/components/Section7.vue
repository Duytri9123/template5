<template>
  <section class="relative mt-15 md:mt-20 lg:mt-[3%] xl:mt-[4%] 2xl:mt-[6%] ">
    <div class="w-full flex flex-col justify-center items-center gap-10">
      <h1
        class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold text-center px-4"
      >
        Các gói dịch vụ liên quan
      </h1>
      <div class="relative 2xl:w-3/4 w-full xl:w-6/7 lg:w-6/7 px-8">
        <div class=" w-full flex flex-row justify-center items-center gap-4 lg:gap-0">
          <button
            class="swiper-button-prev-custom cursor-pointer lg:p-3 p-2 aspect-square rounded-full bg-white hover:bg-gray-100 drop-shadow-lg flex items-center justify-center lg:absolute top-1/2 -translate-y-1/2 -left-12 z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29361 12.7078C4.29119 12.7054 4.28879 12.703 4.2864 12.7005C4.1099 12.5208 4.0008 12.2746 4 12.003C4 12.002 4 12.001 4 12C4 11.999 4 11.998 4 11.997C4.0004 11.8625 4.02735 11.7343 4.07588 11.6172C4.12357 11.502 4.19374 11.3938 4.2864 11.2995C4.28875 11.297 4.29112 11.2947 4.29351 11.2923M11.2929 4.29289L4.29351 11.2923L11.2929 4.29289Z"
                fill="url(#paint0_linear_1_14378)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_14378"
                  x1="20"
                  y1="12"
                  x2="4"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBC2EB" />
                  <stop offset="1" stop-color="#A18CD1" />
                </linearGradient>
              </defs>
            </svg>
          </button>

          <button
            class="swiper-button-next-custom cursor-pointer lg:p-3 p-2 aspect-square rounded-full bg-white hover:bg-gray-100 drop-shadow-lg flex items-center justify-center  lg:absolute top-1/2 -translate-y-1/2 -right-12 z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7064 12.7078C19.7088 12.7054 19.7112 12.703 19.7136 12.7005C19.8901 12.5208 19.9992 12.2746 20 12.003C20 12.002 20 12.001 20 12C20 11.999 20 11.998 20 11.997C19.9996 11.8625 19.9727 11.7343 19.9241 11.6172C19.8764 11.502 19.8063 11.3938 19.7136 11.2995C19.7112 11.297 19.7089 11.2947 19.7065 11.2923M12.7071 4.29289L19.7065 11.2923L12.7071 4.29289Z"
                fill="url(#paint0_linear_1_14372)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_14372"
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FBC2EB" />
                  <stop offset="1" stop-color="#A18CD1" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </div>
        <Swiper
          :slides-per-view="1"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :space-between="24"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :loop="true"
          :looped-slides="6"
          :slides-per-group="1"
          :breakpoints="{
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
          }"
          :modules="[Navigation, Pagination, Autoplay]"
          :pagination="{
            el: '.custom-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: false,
            hideNavigation: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          class="w-full services-swiper pb-16"
        >
          <SwiperSlide
            v-for="(service, index) in allServices"
            :key="index"
            class="h-auto"
          >
            <div
              class="relative bg-white rounded-2xl shadow-md w-full h-full flex flex-col border border-gray-100 overflow-hidden"
            >
              <div class="w-full h-48 overflow-hidden">
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between min-h-[200px]">
                <div class="flex flex-col gap-4 flex-1">
                  <h3 class="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                    {{ service.title }}
                  </h3>
                  <p class="text-sm text-gray-600 flex-1 line-clamp-4">
                    {{ service.description }}
                  </p>
                </div>
                <a
                  href="tel:123"
                  class="relative text-[var(--color-green)] font-medium flex items-center gap-2 mt-4"
                >
                  Đăng ký tư vấn ngay
                  <span class="text-xl">»</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="custom-pagination flex justify-center items-center gap-2 mt-8"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ref, onMounted, nextTick } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sevice1 from "../Images/sevice-1.png";
import sevice2 from "../Images/sevice-2.png";
import sevice3 from "../Images/sevice-3.png";

const swiper = ref(null);
const currentSlide = ref(0);

const onSwiper = (s) => {
  swiper.value = s;
  nextTick(() => {
    updatePagination();
  });
};

const onSlideChange = (s) => {
  currentSlide.value = s.realIndex;
  updatePagination();
};

onMounted(() => {
  nextTick(() => {
    updatePagination();
  });
});

const services = [
  {
    title: "Gói Khám sàng lọc ung thư tiền liệt tuyến",
    image: sevice1,
    description:
      "Ung thư tiền liệt tuyến rất nguy hiểm, đe dọa nặng nề đến sức khỏe nam giới. Vì vậy các bác sĩ luôn khuyến nghị người thuộc đối tượng có nguy cơ cao mắc căn bệnh này nên khám sàng lọc định kỳ để có thể phát hiện sớm, chính xác, giúp điều trị hiệu quả.",
  },
  {
    title: "Gói Khám tầm soát ung thư đường tiêu hoá",
    image: sevice2,
    description:
      "Tầm soát ung thư đường tiêu hoá là việc làm rất quan trọng với mỗi người. Tầm soát định kỳ được khuyến cáo cho tất cả mọi người, trong đó những trường hợp đặc biệt dưới đây thuộc nguy cơ cao mắc ung thư đường tiêu hoá.",
  },
  {
    title: "Gói Khám sàng lọc ung thư phổi",
    image: sevice3,
    description:
      "Ung thư phổi là một trong những bệnh lý nguy hiểm đe dọa cả phụ nữ và nam giới tại Việt Nam. Bởi vậy, khám sàng lọc ung thư phổi luôn được các bác sĩ khuyến khích thực hiện định kỳ nhằm phát hiện sớm tình trạng bệnh để có phương án điều trị hiệu quả.",
  },
];

const allServices = [...services, ...services, ...services, ...services];

const updatePagination = () => {
  const paginationEl = document.querySelector(".custom-pagination");
  if (!paginationEl) return;

  paginationEl.innerHTML = "";

  for (let i = 0; i < services.length; i++) {
    const bullet = document.createElement("span");
    bullet.className = `custom-bullet ${
      i === currentSlide.value % services.length ? "custom-bullet-active" : ""
    }`;
    bullet.addEventListener("click", () => {
      if (swiper.value) {
        swiper.value.slideToLoop(i);
      }
    });
    paginationEl.appendChild(bullet);
  }
};
</script>
