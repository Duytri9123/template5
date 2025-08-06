<template>
  <section class="relative  md:mt-10 lg:mt-[3%] xl:mt-[4%] 2xl:mt-[6%]">
    <div class="relative w-full flex flex-col justify-center items-center gap-10 bg-background-rev overflow-hidden z-10 2xl:py-[5%] lg:py-[5%] py-[3%]">
      <div class="absolute w-full opacity-25">
        <img src="../Images/hinhanh.png" alt="" class="object-cover lg:w-full h-[100dvh]" />
      </div>
      <h1
        class="text-white relative xl:w-1/2 lg:w-3/5 text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold text-center px-4"
      >
        Cảm nhận của khách hàng sau khi sử dụng dịch vụ Tầm soát ung thư tuyến giáp
      </h1>
      <div class="relative 2xl:w-7/9 w-full xl:w-6/7 lg:w-6/7 p-3">
        <div class="w-full flex flex-row justify-center items-center gap-4 lg:gap-0">
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
            class="swiper-button-next-custom cursor-pointer lg:p-3 p-2 aspect-square rounded-full bg-white hover:bg-gray-100 drop-shadow-lg flex items-center justify-center lg:absolute top-1/2 -translate-y-1/2 -right-12 z-10"
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
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :loop="true"
          :looped-slides="6"
          :slides-per-group="1"
          :breakpoints="{
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            1280: { slidesPerView: 3, slidesPerGroup: 1 },
          }"
          :modules="[Navigation, Pagination, Autoplay]"
          :pagination="{
            el: '.thyroid-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: false,
            hideNavigation: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          class="w-full services-swiper"
        >
          <SwiperSlide
            v-for="(service, index) in allServices"
            :key="index"
            class="h-auto"
          >
            <div
              class="flex flex-col items-center justify-center p-8 xl:col-span-1 bg-white shadow-md  rounded-3xl gap-4"
            >
              <div class="relative">
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.15391 0.769409H12.4617C13.6154 0.769409 14.5964 1.17322 15.4039 1.98077C16.2115 2.78832 16.6153 3.76894 16.6153 4.92302V20.1535C16.6153 21.6535 16.3232 23.0849 15.7392 24.4479C15.1551 25.8109 14.3654 26.9897 13.3704 27.985C12.3751 28.9803 11.1961 29.7702 9.83312 30.3542C8.47006 30.9381 7.03857 31.2306 5.53842 31.2306H4.15391C3.77859 31.2306 3.45449 31.0932 3.18011 30.8194C2.90618 30.5454 2.7691 30.2202 2.7691 29.8458V27.0762C2.7691 26.7012 2.90618 26.3766 3.18011 26.1027C3.45427 25.8289 3.77867 25.6915 4.15391 25.6915H5.53834C7.06744 25.6915 8.37261 25.1506 9.45432 24.0692C10.5359 22.9873 11.0769 21.6824 11.0769 20.1535V19.4615C11.0769 18.8844 10.875 18.3937 10.4712 17.9902C10.0673 17.5865 9.57677 17.3844 9.00004 17.3844H4.15391C3.00014 17.3844 2.01914 16.9804 1.21136 16.1729C0.403661 15.3654 0 14.3848 0 13.2308V4.92332C0 3.76924 0.403888 2.78855 1.21136 1.98085C2.01921 1.1733 2.99991 0.769409 4.15391 0.769409ZM31.8459 0.769409C32.9999 0.769409 33.9806 1.1733 34.7881 1.98085C35.5962 2.78832 35.9997 3.76894 35.9999 4.92302V20.1535C35.9999 21.6535 35.7077 23.0852 35.1237 24.4479C34.54 25.8106 33.7498 26.9897 32.7546 27.985C31.7592 28.9803 30.5804 29.7702 29.2176 30.3542C27.8544 30.9381 26.423 31.2306 24.9231 31.2306H23.5383C23.1633 31.2306 22.8386 31.0932 22.5648 30.8194C22.2908 30.5454 22.1535 30.2202 22.1535 29.8458V27.0762C22.1535 26.7012 22.2908 26.3766 22.5648 26.1027C22.8387 25.8289 23.1634 25.6915 23.5383 25.6915H24.9231C26.4523 25.6915 27.7572 25.1506 28.8388 24.0692C29.9207 22.9873 30.4617 21.6824 30.4617 20.1535V19.4615C30.4617 18.8844 30.2593 18.3939 29.8559 17.9902C29.4521 17.5865 28.9612 17.3844 28.3845 17.3844H23.5383C22.3844 17.3844 21.4036 16.9804 20.5961 16.1729C19.7886 15.3654 19.3849 14.3848 19.3849 13.2308V4.92332C19.3849 3.76924 19.7886 2.78862 20.5961 1.98085C21.4036 1.1733 22.3843 0.769409 23.5383 0.769409H31.8459Z"
                    fill="url(#paint0_linear_1_14703)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_14703"
                      x1="0"
                      y1="16"
                      x2="35.9999"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FBC2EB" />
                      <stop offset="1" stop-color="#A18CD1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div class="flex flex-col items-center justify-between h-full gap-6">
                <div class="flex flex-col gap-4">
                  <h1 class="font-bold sm:text-lg text-black font-lato text-center">
                    {{ service.title }}
                  </h1>

                  <p
                    class="text-[#454545] text-sm font-lato w-full text-center"
                  >
                    {{ service.description }}
                  </p>
                </div>
                <div
                  class="relative rounded-xl bg-white flex flex-col items-center justify-center gap-5"
                >
                  <div class="rounded-full aspect-square">
                    <img :src="service.image" :alt="service.title" class="object-cover" />
                  </div>

                  <svg
                    width="69"
                    height="12"
                    viewBox="0 0 69 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.85669 1.56021C5.37159 0.808908 6.48035 0.808908 6.99524 1.56021L7.75529 2.66921C7.92385 2.91515 8.17204 3.09547 8.45804 3.17978L9.74763 3.55993C10.6213 3.81746 10.9639 4.87196 10.4085 5.59382L9.58862 6.65936C9.4068 6.89567 9.312 7.18744 9.3202 7.48549L9.35716 8.82944C9.3822 9.7399 8.4852 10.3916 7.62703 10.0864L6.36029 9.63599C6.07936 9.53609 5.77258 9.53609 5.49165 9.63599L4.2249 10.0864C3.36674 10.3916 2.46973 9.7399 2.49477 8.82944L2.53174 7.48549C2.53993 7.18744 2.44513 6.89567 2.26331 6.65936L1.44346 5.59382C0.888042 4.87196 1.23067 3.81746 2.10431 3.55993L3.3939 3.17978C3.67989 3.09547 3.92808 2.91515 4.09664 2.66921L4.85669 1.56021Z"
                      fill="#FFB800"
                    />
                    <path
                      d="M19.0793 1.56021C19.5942 0.808908 20.703 0.808908 21.2179 1.56021L21.9779 2.66921C22.1465 2.91515 22.3947 3.09547 22.6807 3.17978L23.9703 3.55993C24.8439 3.81746 25.1866 4.87196 24.6311 5.59382L23.8113 6.65936C23.6295 6.89567 23.5347 7.18744 23.5429 7.48549L23.5798 8.82944C23.6049 9.7399 22.7079 10.3916 21.8497 10.0864L20.5829 9.63599C20.302 9.53609 19.9952 9.53609 19.7143 9.63599L18.4476 10.0864C17.5894 10.3916 16.6924 9.7399 16.7174 8.82944L16.7544 7.48549C16.7626 7.18744 16.6678 6.89567 16.486 6.65936L15.6661 5.59382C15.1107 4.87196 15.4533 3.81746 16.327 3.55993L17.6166 3.17978C17.9025 3.09547 18.1507 2.91515 18.3193 2.66921L19.0793 1.56021Z"
                      fill="#FFB800"
                    />
                    <path
                      d="M33.3015 1.56021C33.8164 0.808908 34.9252 0.808908 35.4401 1.56021L36.2001 2.66921C36.3687 2.91515 36.6169 3.09547 36.9029 3.17978L38.1925 3.55993C39.0661 3.81746 39.4087 4.87196 38.8533 5.59382L38.0334 6.65936C37.8516 6.89567 37.7568 7.18744 37.765 7.48549L37.802 8.82944C37.827 9.7399 36.93 10.3916 36.0719 10.0864L34.8051 9.63599C34.5242 9.53609 34.2174 9.53609 33.9365 9.63599L32.6697 10.0864C31.8116 10.3916 30.9146 9.7399 30.9396 8.82944L30.9766 7.48549C30.9848 7.18744 30.89 6.89567 30.7081 6.65936L29.8883 5.59382C29.3329 4.87196 29.6755 3.81746 30.5491 3.55993L31.8387 3.17978C32.1247 3.09547 32.3729 2.91515 32.5415 2.66921L33.3015 1.56021Z"
                      fill="#FFB800"
                    />
                    <path
                      d="M47.5237 1.56021C48.0386 0.808908 49.1473 0.808908 49.6622 1.56021L50.4223 2.66921C50.5908 2.91515 50.839 3.09547 51.125 3.17978L52.4146 3.55993C53.2883 3.81746 53.6309 4.87196 53.0755 5.59382L52.2556 6.65936C52.0738 6.89567 51.979 7.18744 51.9872 7.48549L52.0242 8.82944C52.0492 9.7399 51.1522 10.3916 50.294 10.0864L49.0273 9.63599C48.7463 9.53609 48.4396 9.53609 48.1586 9.63599L46.8919 10.0864C46.0337 10.3916 45.1367 9.7399 45.1618 8.82944L45.1987 7.48549C45.2069 7.18744 45.1121 6.89567 44.9303 6.65936L44.1104 5.59382C43.555 4.87196 43.8977 3.81746 44.7713 3.55993L46.0609 3.17978C46.3469 3.09547 46.5951 2.91515 46.7636 2.66921L47.5237 1.56021Z"
                      fill="#FFB800"
                    />
                    <path
                      d="M61.7458 1.56021C62.2607 0.808908 63.3695 0.808908 63.8844 1.56021L64.6445 2.66921C64.813 2.91515 65.0612 3.09547 65.3472 3.17978L66.6368 3.55993C67.5104 3.81746 67.8531 4.87196 67.2976 5.59382L66.4778 6.65936C66.296 6.89567 66.2012 7.18744 66.2094 7.48549L66.2463 8.82944C66.2714 9.7399 65.3744 10.3916 64.5162 10.0864L63.2494 9.63599C62.9685 9.53609 62.6617 9.53609 62.3808 9.63599L61.1141 10.0864C60.2559 10.3916 59.3589 9.7399 59.3839 8.82944L59.4209 7.48549C59.4291 7.18744 59.3343 6.89567 59.1525 6.65936L58.3326 5.59382C57.7772 4.87196 58.1198 3.81746 58.9935 3.55993L60.2831 3.17978C60.5691 3.09547 60.8172 2.91515 60.9858 2.66921L61.7458 1.56021Z"
                      fill="#FFB800"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          class="relative thyroid-pagination flex justify-center items-center gap-2 mt-8"
        ></div>
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

import sevice1 from "../Images/NMA.png";
import sevice2 from "../Images/NMA-2.png";
import sevice3 from "../Images/NMA-3.png";

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
    title:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    image: sevice1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa phasellus diam. Sit mi at nibh amet, suscipit dui ornare cursus duis.",
  },
  {
    title:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    image: sevice2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa phasellus diam. Sit mi at nibh amet, suscipit dui ornare cursus duis.",
  },
  {
    title:
      "Bệnh viện Phương Đông mang đến cho tôi cảm giác vô cùng bình yên và an tâm khi thăm khám tại đây!",
    image: sevice3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nulla etiam sed consequat dictumst viverra molestie tortor feugiat. Purus consequat, sapien diam nec. Egestas lacinia scelerisque ultrices vivamus adipiscing diam massa phasellus diam. Sit mi at nibh amet, suscipit dui ornare cursus duis.",
  },
];
const allServices = [...services, ...services, ...services, ...services];

const updatePagination = () => {
  const paginationEl = document.querySelector(".thyroid-pagination");
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
<style scoped></style>