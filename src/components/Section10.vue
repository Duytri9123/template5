<template>
  <section class="relative mt-15 md:mt-25 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]">
    <div class=" w-full flex flex-col justify-center items-center lg:gap-10 gap-4">
      <h1
        class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold text-center px-4"
      >
        Đội ngũ bác sĩ của chúng tôi
      </h1>
      <div class="relative w-full px-8 flex flex-col justify-center items-center">
        <div class="absolute bottom-0">
          <img src="../Images/rectangle-6.png" alt="" class=" object-cover md:h-full min-h-96" />
        </div>

        <div
          class="relative lg:absolute w-full flex justify-center flex-col items-center mt-10 lg:mt-0 px-4"
        >
          <div
            class="lg:w-full 2xl:w-4/5 px-2 gap-8 flex flex-row items-center justify-between "
          >
            <button
              @click="swiper?.slidePrev()"
              class="relative -translate-y-2/3 xl:top-30 2xl:top-20 lg:top-30  0 2xl:-translate-x-10 z-50 bg-white text-gray-700 hover:bg-gray-100 rounded-full lg:p-3 p-2 shadow-lg flex items-center justify-center"
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
                  fill="url(#paint0_linear_1_14291)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_14291"
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
            <!-- Nút Next -->
            <button
              @click="swiper?.slideNext()"
              class="relative -translate-y-2/3 xl:top-30 2xl:top-20 lg:top-30 2xl:translate-x-10 z-50 bg-white text-gray-700 hover:bg-gray-100 rounded-full lg:p-3 p-2 shadow-lg flex items-center justify-center"
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
                  fill="url(#paint0_linear_1_14285)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_14285"
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
            650: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
            1520: { slidesPerView: 4, slidesPerGroup: 1 },
          }"
          :modules="[Navigation, Pagination, Autoplay]"
          :pagination="{
            el: '.doctors-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: false,
            hideNavigation: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          class=" relative xl:w-4/5 2xl:w-3/4 w-full overflow-hidden services-swiper mb-5"
        >
          <SwiperSlide v-for="(service, index) in allServices" :key="index">
            <div
              class="rounded-2xl w-full h-full flex flex-col items-center justify-center"
            >
              <div class="border-b-4 border-white overflow-hidden max-h-90">
                <img
                  :src="service.image"
                  :alt="service.title"
                  class="w-full object-cover"
                />
              </div>

              <div
                class="p-6 space-y-3 flex-1 flex flex-col justify-between items-center"
              >
                <div class="flex flex-col gap-4 items-center">
                  <h3 class="text-lg font-semibold">{{ service.title }}</h3>
                  <p class="text-sm text-gray-600 flex-1">
                    {{ service.description }}
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center text-white text-xs text-justify">
                  <svg
                    width="92"
                    height="16"
                    viewBox="0 0 92 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10616 1.20359C7.50337 0.624014 8.3587 0.624014 8.75591 1.20359L10.5271 3.7879C10.6571 3.97764 10.8485 4.11674 11.0692 4.18178L14.0743 5.06764C14.7483 5.26631 15.0126 6.07977 14.5841 6.63664L12.6736 9.1197C12.5333 9.30199 12.4602 9.52707 12.4665 9.757L12.5527 12.8888C12.572 13.5912 11.88 14.0939 11.218 13.8585L8.26608 12.8088C8.04936 12.7317 7.8127 12.7317 7.59599 12.8088L4.64407 13.8585C3.98206 14.0939 3.29009 13.5912 3.30941 12.8888L3.39554 9.757C3.40187 9.52707 3.32873 9.30199 3.18847 9.1197L1.27795 6.63664C0.849489 6.07977 1.1138 5.26631 1.78775 5.06764L4.7929 4.18178C5.01352 4.11674 5.20499 3.97764 5.33502 3.7879L7.10616 1.20359Z"
                      fill="#FFCE70"
                    />
                    <path
                      d="M26.1408 1.20359C26.538 0.624014 27.3934 0.624014 27.7906 1.20359L29.5617 3.7879C29.6918 3.97764 29.8832 4.11674 30.1038 4.18178L33.109 5.06764C33.7829 5.26631 34.0472 6.07977 33.6188 6.63664L31.7083 9.1197C31.568 9.30199 31.4949 9.52707 31.5012 9.757L31.5873 12.8888C31.6066 13.5912 30.9147 14.0939 30.2527 13.8585L27.3007 12.8088C27.084 12.7317 26.8474 12.7317 26.6307 12.8088L23.6787 13.8585C23.0167 14.0939 22.3248 13.5912 22.3441 12.8888L22.4302 9.757C22.4365 9.52707 22.3634 9.30199 22.2231 9.1197L20.3126 6.63664C19.8842 6.07977 20.1485 5.26631 20.8224 5.06764L23.8276 4.18178C24.0482 4.11674 24.2397 3.97764 24.3697 3.7879L26.1408 1.20359Z"
                      fill="#FFCE70"
                    />
                    <path
                      d="M45.175 1.20359C45.5722 0.624014 46.4275 0.624014 46.8248 1.20359L48.5959 3.7879C48.7259 3.97764 48.9174 4.11674 49.138 4.18178L52.1432 5.06764C52.8171 5.26631 53.0814 6.07977 52.653 6.63664L50.7424 9.1197C50.6022 9.30199 50.5291 9.52707 50.5354 9.757L50.6215 12.8888C50.6408 13.5912 49.9489 14.0939 49.2868 13.8585L46.3349 12.8088C46.1182 12.7317 45.8816 12.7317 45.6648 12.8088L42.7129 13.8585C42.0509 14.0939 41.3589 13.5912 41.3783 12.8888L41.4644 9.757C41.4707 9.52707 41.3976 9.30199 41.2573 9.1197L39.3468 6.63664C38.9183 6.07977 39.1826 5.26631 39.8566 5.06764L42.8617 4.18178C43.0824 4.11674 43.2738 3.97764 43.4039 3.7879L45.175 1.20359Z"
                      fill="#FFCE70"
                    />
                    <path
                      d="M64.2097 1.20359C64.6069 0.624014 65.4622 0.624014 65.8594 1.20359L67.6306 3.7879C67.7606 3.97764 67.9521 4.11674 68.1727 4.18178L71.1778 5.06764C71.8518 5.26631 72.1161 6.07977 71.6876 6.63664L69.7771 9.1197C69.6369 9.30199 69.5637 9.52707 69.57 9.757L69.6562 12.8888C69.6755 13.5912 68.9835 14.0939 68.3215 13.8585L65.3696 12.8088C65.1529 12.7317 64.9162 12.7317 64.6995 12.8088L61.7476 13.8585C61.0856 14.0939 60.3936 13.5912 60.4129 12.8888L60.4991 9.757C60.5054 9.52707 60.4322 9.30199 60.292 9.1197L58.3815 6.63664C57.953 6.07977 58.2173 5.26631 58.8913 5.06764L61.8964 4.18178C62.117 4.11674 62.3085 3.97764 62.4385 3.7879L64.2097 1.20359Z"
                      fill="#FFCE70"
                    />
                    <path
                      d="M83.2439 1.20359C83.6411 0.624014 84.4964 0.624014 84.8936 1.20359L86.6647 3.7879C86.7948 3.97764 86.9862 4.11674 87.2069 4.18178L90.212 5.06764C90.886 5.26631 91.1503 6.07977 90.7218 6.63664L88.8113 9.1197C88.671 9.30199 88.5979 9.52707 88.6042 9.757L88.6904 12.8888C88.7097 13.5912 88.0177 14.0939 87.3557 13.8585L84.4038 12.8088C84.1871 12.7317 83.9504 12.7317 83.7337 12.8088L80.7818 13.8585C80.1198 14.0939 79.4278 13.5912 79.4471 12.8888L79.5332 9.757C79.5396 9.52707 79.4664 9.30199 79.3262 9.1197L77.4156 6.63664C76.9872 6.07977 77.2515 5.26631 77.9254 5.06764L80.9306 4.18178C81.1512 4.11674 81.3427 3.97764 81.4727 3.7879L83.2439 1.20359Z"
                      fill="#FFCE70"
                    />
                  </svg>
                  <p>4.8/5 (38 bình chọn)</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Pagination -->
        <div class="relative bottom-4 doctors-pagination flex justify-center items-center gap-2"></div>
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

import NTC from "../Images/NTC.png";
import NHB from "../Images/NHB.png";
import TKT from "../Images/TKT.png";
import NTKY from "../Images/NTKY.png";

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
    title: "NGUYỄN TRUNG CHÍNH",
    image: NTC,
    description: "PGS.TS. Bác sĩ Ung bướu",
  },
  {
    title: "NGUYỄN TRUNG CHÍNH",
    image: NHB,
    description: "PGS.TS. Bác sĩ Ung bướu",
  },
  {
    title: "NGUYỄN TRUNG CHÍNH",
    image: TKT,
    description: "PGS.TS. Bác sĩ Ung bướu",
  },
  {
    title: "NGUYỄN TRUNG CHÍNH",
    image: NTKY,
    description: "PGS.TS. Bác sĩ Ung bướu",
  },
];

// Nhân đôi mảng dịch vụ
const allServices = [...services, ...services, ...services, ...services];
const updatePagination = () => {
  const paginationEl = document.querySelector(".doctors-pagination");
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
<style></style>
