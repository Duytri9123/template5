<template>
  <section class="relative mt-15 md:mt-25 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]">
    <div class="w-full relative flex items-center justify-center">
      <div class="flex w-full flex-col justify-center">
        <div class="relative z-50 flex w-full flex-row-reverse">
          <div
            class="flex flex-col w-full xl:w-3/5 relative xl:items-start items-center gap-8 z-10"
          >
            <h1
              class="text-lg md:text-xl lg:text-3xl 2xl:text-[38px] font-bold text-center lg:text-start"
            >
              Gói tầm soát ung thư tuyến giáp tại <br />
              BVĐK Phương Đông bao gồm những gì?
            </h1>

            <div
              class="flex flex-row gap-4 2xl:gap-6 font-bold text-center text-sm lg:text-base xl:text-[18px] px-2"
            >
              <div
                v-for="(tab, index) in tabs"
                :key="index"
                @click="goToSlide(index)"
                :class="[
                  'cursor-pointer transition-all duration-300 rounded-lg font-lato',
                  currentTab === index ? 'text-black' : 'text-[#888888] hover:text-black',
                ]"
              >
                {{ tab }}
              </div>
            </div>
          </div>
        </div>

        <!-- Swiper và Hình nền -->
        <div
          class="relative w-full flex justify-center items-center lg:flex-row flex-col xl:bottom-10"
        >
          <!-- Hình nền -->
          <div
            class="relative w-[99dvw] lg:flex hidden justify-center flex-col items-center"
          >
            <div>
              <img src="../Images/rectangle-4.png" alt="" class="object-cover" />
            </div>
          </div>

          <div
            class="relative lg:absolute w-full flex justify-center flex-col items-center mt-10 lg:mt-0"
          >
            <div
              class="lg:w-8/9 2xl:w-7xl gap-8 flex flex-row items-center justify-between"
            >
              <button
                @click="swiper?.slidePrev()"
                class="cursor-pointer relative -translate-y-1/2 2xl:-translate-x-10 z-50 bg-white text-gray-700 hover:bg-gray-100 rounded-full lg:p-3 p-2 shadow-lg flex items-center justify-center"
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
                class=" cursor-pointer relative -translate-y-1/2 2xl:translate-x-10 z-50 bg-white text-gray-700 hover:bg-gray-100 rounded-full lg:p-3 p-2 shadow-lg flex items-center justify-center"
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

          <div
            class="relative lg:absolute w-full z-20 px-4 lg:px-0 xl:bottom-10 2xl:bottom-20 flex"
          >
            <Swiper
              :slides-per-view="1"
              :space-between="30"
              :loop="false"
              @swiper="onSwiper"
              @slide-change="onSlideChange"
              class="xl:w-full lg:w-6/8 w-full bg-gradient-mobile rounded-2xl"
            >
              <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div
                  class="flex w-full md:flex-row flex-col relative lg:items-start items-center xl:pt-10 pt-2 lg:mt-[2%] xl:mt-[5%]"
                >
                  <div
                    class="flex xl:w-2/5 lg:w-2/5 w-1/2 xl:justify-end relative z-2 p-2 lg:mb-3"
                  >
                    <img
                      :src="slide.image"
                      alt=""
                      class="2xl:w-1/2 xl:w-4/7 w-full object-contain 2xl:mr-10 xl:mr-5 mr-0"
                    />
                  </div>

                  <div
                    class="flex flex-col xl:w-3/5 lg:w-full w-full text-white xl:mt-[12%] p-4 sm:p-8 lg:p-0 xl:p-0 lg:my-0 lg:py-4"
                  >
                    <h2 class="text-xl md:text-xl xl:text-3xl font-bold mb-4 lg:mb-1">
                      {{ slide.title }}
                    </h2>
                    <p class="text-sm md:text-base 2xl:w-2/3 xl:w-5/6 lg:w-full w-full">
                      {{ slide.desc }}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <!-- Nút Prev -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import doctorhands from "../Images/doctor-hands.png";

const currentTab = ref(0);
const swiper = ref(null);

const tabs = [
  "Khám bệnh tổng quát",
  "Khám chuyên khoa Ngoại",
  "Chẩn đoán hình ảnh",
  "Xét nghiệm",
];

const slides = [
  {
    image: doctorhands,
    title: "Khám bệnh tổng quát",
    desc: `Khách hàng sẽ được đón tiếp và thăm khám bởi các chuyên gia, y bác sĩ hàng đầu, giỏi về chuyên môn, giàu kinh nghiệm. Bác sĩ sẽ khai thác bệnh sử, khám lâm sàng để phát hiện các nguy cơ ban đầu. Từ đó có căn cứ để chỉ định thực hiện xét nghiệm và chẩn đoán bằng hình ảnh.
Bác sĩ phụ trách khám tổng quát cũng chính là người sẽ tiếp nhận kết quả chẩn đoán và đưa ra kết luận cuối cùng. Tầm soát, sàng lọc ung thư tuyến giáp là một trong những kỹ thuật khó, không phải bệnh viện nào cũng có thể thực hiện. Phương pháp đòi hỏi cơ sở y tế phải có hệ thống máy móc và thiết bị y tế chuyên biệt cùng đội ngũ y bác sĩ giàu kinh nghiệm.`,
  },
  {
    image: doctorhands,
    title: "Khám chuyên khoa Ngoại",
    desc: `Thăm khám kỹ lưỡng bởi bác sĩ chuyên khoa Ngoại để phát hiện bất thường về tuyến giáp như: khối u, sưng viêm...`,
  },
  {
    image: doctorhands,
    title: "Chẩn đoán hình ảnh",
    desc: `Ứng dụng công nghệ chẩn đoán hình ảnh (siêu âm, CT...) để quan sát tuyến giáp, phát hiện những thay đổi bất thường về kích thước, cấu trúc.`,
  },
  {
    image: doctorhands,
    title: "Xét nghiệm",
    desc: `Thực hiện xét nghiệm máu, hormone tuyến giáp (TSH, T3, T4) để đánh giá chức năng tuyến giáp và phát hiện dấu hiệu bất thường.`,
  },
];

const onSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};

const onSlideChange = (swiperInstance) => {
  currentTab.value = swiperInstance.activeIndex;
};

const goToSlide = (index) => {
  if (swiper.value) {
    swiper.value.slideTo(index);
  }
};
</script>

<style scoped></style>
