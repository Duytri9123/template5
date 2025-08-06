<template>
  <section class="relative mt-10 md:mt-25 lg:mt-[10%] xl:mt-[4%] 2xl:mt-[6%]">
    <div
      class="relative top-9 md:top-16 flex flex-col lg:flex-row-reverse lg:gap-8 xl:gap-12"
    >
      <div
        class="relative flex w-full lg:w-auto xl:w-1/2 2xl:w-auto justify-end items-end lg:items-center right-0"
      >
        <!-- doctor -->
        <div
          class="absolute z-20 right-1/4 lg:right-1/3 2xl:right-1/8 w-2/3 lg:w-4/5 2xl:w-full -translate-y-1/4 lg:-translate-y-1/3 2xl:-translate-y-1/4 xl:mt-8"
        >
          <img src="../Images/doctor-3.png" alt="doctor" class="object-contain" />
        </div>
        <!-- rectangle -->
        <div class="relative w-full flex justify-end">
          <img src="../Images/Rectangle-2.png" alt="rectangle" class="object-cover" />
        </div>
      </div>

      <div
        class="relative flex flex-col justify-center lg:justify-start items-center lg:item-start w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2 p-4 lg:-translate-y-1/4 xl:-translate-y-1/4 2xl:-translate-y-1/10"
      >
        <div
          class="flex flex-col justify-center sm:items-start items-center lg:gap-6 gap-3 w-full  md:px-8 lg:px-3 2xl:px-0 p-1 2xl:w-3/4"
        >
          <h1 class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold xL:mb-4">
            Lưu ý khi sử dụng dịch vụ
          </h1>
          <div class="space-y-4 flex flex-row-reverse">
            <div
              class="text-black text-sm md:text-base flex flex-col gap-4 font-medium "
            >
              <div
                v-for="(item, index) in targets"
                :key="index"
                class="flex items-center gap-4 bg-[#FFF2FD] justify-center px-4 py-2 xl:rounded-[15px] rounded-2xl"
              >
                <div class="shrink-0">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_14302)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.4996 0.504202L29.2475 3.25204C29.9106 3.91524 29.9201 5.2606 29.2696 5.91101L26.471 8.72549L27.5086 9.76941C28.7429 11.0069 28.7397 13.0186 27.5023 14.2529L18.8431 22.8931C18.5924 23.1406 18.2688 23.2643 17.9451 23.2643C17.6215 23.2643 17.2946 23.1406 17.0471 22.8931C16.5521 22.3949 16.5553 21.5921 17.0503 21.0971L22.6951 15.4682L24.0437 14.1228L25.7095 12.4602C25.9538 12.2127 25.957 11.8097 25.7095 11.5622L24.6814 10.5278L22.5714 12.6506L17.1392 7.21833L23.8406 0.478818C24.4911 -0.16848 25.8365 -0.158961 26.4996 0.504202ZM7.03309 28.0556L1.21693 29.9626C0.67117 30.1435 0.131755 29.639 0.271336 29.0837L1.83247 22.8963C1.89593 22.6488 2.02285 22.4235 2.20054 22.2426L15.797 8.56687L21.226 13.9991L7.59472 27.7097C7.43924 27.8684 7.24568 27.9858 7.03309 28.0556Z"
                        fill="url(#paint0_linear_1_14302)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_14302"
                        x1="0.249023"
                        y1="15"
                        x2="29.7512"
                        y2="15"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FBC2EB" />
                        <stop offset="1" stop-color="#A18CD1" />
                      </linearGradient>
                      <clipPath id="clip0_1_14302">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p class="leading-snug pt-1">{{ item }}</p>
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
  "Với những trường hợp nghi ngờ ung thư tuyến giáp, bác sĩ có thể chỉ định người bệnh thực hiện thêm các xét nghiệm như chọc hút tế bào tuyến giáp. ",
  "Với những trường hợp nghi ngờ ung thư tuyến giáp, bác sĩ có thể chỉ định người bệnh thực hiện thêm các xét nghiệm như chọc hút tế bào tuyến giáp. ",
  "Với những trường hợp nghi ngờ ung thư tuyến giáp, bác sĩ có thể chỉ định người bệnh thực hiện thêm các xét nghiệm như chọc hút tế bào tuyến giáp. ",
  "Với những trường hợp nghi ngờ ung thư tuyến giáp, bác sĩ có thể chỉ định người bệnh thực hiện thêm các xét nghiệm như chọc hút tế bào tuyến giáp. ",
  
  ]
</script>

<style lang="scss" scoped></style>
