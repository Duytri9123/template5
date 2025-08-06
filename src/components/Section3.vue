<template>
  <section class="relative mt-20 md:mt-30 lg:mt-[8%]">
    <div class="relative top-9 md:top-20 flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
      <div
        class="relative flex w-full lg:w-auto xl:w-1/2 2xl:w-auto justify-start items-end lg:items-center left-0 xl:mt-10 2xl:mt-10"
      >
        <!-- doctor -->
        <div
          class="absolute z-20 left-1/5 lg:left-1/4 2xl:left-1/3 w-2/3 lg:w-4/5 2xl:w-full -translate-y-1/4 lg:-translate-y-1/3 2xl:-translate-y-1/4"
        >
          <img src="../Images/doctor-2.png" alt="doctor" class="object-contain" />
        </div>
        <!-- rectangle -->
        <div class="relative w-full flex justify-start">
          <img src="../Images/Rectangle-3.png" alt="rectangle" class="object-cover" />
        </div>
      </div>

      <div
        class="relative z-50 flex flex-col justify-center lg:justify-start items-center lg:items-start w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 p-4 lg:-translate-y-1/6   xl:-translate-y-1/5 2xl:-translate-y-1/8"
      >
        <div
          class="flex flex-col justify-center items-center sm:items-start  w-full 2xl:w-full md:px-8 lg:px-3 2xl:px-0 p-1 lg:gap-8 gap-5"
        >
          <div class="flex flex-col gap-1 justify-center items-center lg:items-start">
            <h1 class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold mb-4">
              Ai nên khám tầm soát ung thư tuyến giáp?
            </h1>
            
            <div class="space-y-4">
              <p class="text-gray-600 text-sm md:text-base xl:max-w-8/9">
                Phát hiện sớm bệnh lý ung thư tuyến giáp không chỉ nâng cao hiệu quả trong
                điều trị mà còn hạn chế các biến chứng, tổn thương, gia tăng cơ hồi hồi
                phục hoàn toàn cho người bệnh. Theo khuyến cáo của bác sĩ Bệnh Viện Đa
                khoa Phương Đông, những trường hợp sau đây nên khám sàng lọc định kỳ căn
                bệnh.
              </p>
              <div
                class="text-black text-sm md:text-base flex flex-col gap-4 font-medium xl:max-w-7/8 2xl:max-w-3/4"
              >
                <div
                  v-for="(item, index) in targets"
                  :key="index"
                  class="flex items-center gap-3"
                >
                  <div class="shrink-0">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_14053)" />
                      <path
                        d="M19.9937 12.7426C15.1984 8.54844 9.10122 12.2336 9.00124 17.2294C8.97576 18.5026 9.34329 19.7428 10.0749 20.8862H14.8167L15.6601 19.4804C15.905 19.0723 16.4977 19.0591 16.7565 19.466L18.536 22.2623L21.1299 16.7863C21.3561 16.3085 22.0303 16.2934 22.2798 16.7567L24.5034 20.8862H29.9126C33.9197 14.6235 26.0004 7.48904 19.9937 12.7426Z"
                        fill="white"
                      />
                      <path
                        d="M23.5508 21.8359L21.749 18.4897L19.2011 23.8686C18.9844 24.3262 18.3468 24.366 18.075 23.9387L16.2287 21.0376L15.7341 21.862C15.6176 22.0561 15.4078 22.1749 15.1815 22.1749H11.0942C11.2224 22.3089 10.5395 21.6275 19.539 30.5804C19.7904 30.8305 20.1967 30.8305 20.4481 30.5804C29.3091 21.7652 28.765 22.3087 28.8929 22.1749H24.1183C23.8811 22.1749 23.6632 22.0447 23.5508 21.8359Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_14053"
                          x1="40"
                          y1="40"
                          x2="0"
                          y2="0"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A18CD1" />
                          <stop offset="1" stop-color="#FBC2EB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p class="leading-snug pt-1">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="tel:19001806"
            class="max-w-64 flex text-justify uppercase items-center tracking-[0.8px] justify-center rounded-full px-2 h-12 bg-button text-white font-bold drop-shadow-md/25 text-xs md:text-sm xl:text-base hover:bg-button whitespace-nowrap"
          >
            <span class="text-white mx-2">Đăng ký tư vấn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const targets = [
  "Nữ giới ở độ tuổi từ 15 - 35 và nam giới trong độ tuổi từ 40 trở lên, những người có nhu cầu thăm khám bệnh ung thư tuyến giáp.",
  "Đối tượng có tiền sử gia đình có người bị ung thư tuyến giáp, người mắc hội chứng Cowden, MEN II hoặc FAP.",
  "Những người có chế độ ăn thiếu i - ốt.",
  "Đối tượng bị phơi nhiễm phóng xạ ở mức cao.",
  "Người đang mắc các bệnh liên quan tới tuyến giáp và có thể trạng mệt mỏi, sút cân nhanh.",
  "Đối tượng xuất hiện triệu chứng bất thường nghi ngờ ung thư tuyến giáp như: Có khối u ở vùng tuyến giáp, giọng nói khàn, hạch bạch huyết sưng to,...",
];
</script>

<style lang="scss" scoped></style>
