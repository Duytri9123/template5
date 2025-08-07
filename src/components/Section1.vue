<template>
  <section class="relative w-screen flex justify-center items-center h-full">
    <div
      class="2xl:w-3/4 md:w-full w-full flex items-center justify-between p-4 lg:p-0 mt-16 lg:mt-0"
    >
      <div
        class="w-full xl:w-1/2 lg:w-3/5 2xl:w-3/5  relative flex justify-start items-center lg:items-start flex-col text-white gap-4 lg:gap-3 xl:gap-6  2xl:gap-12 xl:items-stretch"
      >
        <div class="flex flex-col gap-3 md:gap-4 px-2 lg:gap-3 xl:gap-4 2xl:gap-4">
        
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <span
              class="font-bold sm:text-sm text-xs tracking-[1px] leading-1 md:leading-2 md:text-sm md:tracking-[2px] xl:text-base xl:tracking-[3px] 2xl:tracking-[4px]"
              >TẦM SOÁT UNG THƯ TUYẾN GIÁP</span
            >
            <div class="hidden md:flex w-auto min-w-10 border-t"></div>
          </div>
          <!-- tieu de chinh -->
          <div
            class="w-full lg:w-7/9 xl:w-8/9 2xl:w-full max-w-4/5 xl:leading-[120%] font-bold text-2xl text-center md:text-3xl lg:text-start  lg:text-3xl xl:text-5xl 2xl:text-6xl "
          >
            Phát hiện sớm ung thư giúp điều trị dễ dàng
          </div>
          <!-- content -->
          <p
            class="w-8/9 lg:text-justify text-center text-sm font-medium md:text-base"
          >
            Tầm soát ung thư tuyến giáp là phương pháp y học hiện đại giúp phát hiện sớm
            các tổn thương tiền ung thư. Đây được đánh giá là chìa khóa để đưa ra phương
            pháp điều trị sớm và hiệu quả nhất.
          </p>
        </div>
        <!-- lien he -->
        <div
          class="flex flex-col p-2 items-center justify-center font-bold relative z-10 gap-4 lg:items-start"
        >
          <p class="text-white text-sm md:text-base text-justify">
            Quý khách vui lòng để lại số điện thoại, chúng tôi sẽ liên hệ lại ngay!
          </p>

          <!-- input -->
          <div
            class="flex items-center bg-white rounded-full p-1 shadow-lg w-4/5 max-w-xl"
          >
            <!-- Ô nhập số điện thoại -->
            <div class="flex-grow max-w-[70%] w-2/3 lg:mx-5 mx-3">
              <input
                type="tel"
                inputmode="numeric"
                maxlength="200"
                pattern="[0-9]*"
                placeholder="Nhập số điện thoại..."
                class="w-full text-sm md:text-base pl-2 xl:pl-3.5 font-normal outline-none border-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-0"
              />
            </div>

            <a
              href="tel:123456"
              class=" text-xs xl:text-base px-3 xl:px-5 h-8 xl:h-10 flex items-center justify-center gap-1 bg-button text-white rounded-full transition-all duration-300 ease-in-out whitespace-nowrap"
            >
              <svg
                class="w-4 h-4 xl:w-5 xl:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_13990)">
                  <path
                    d="M8.75 17.6123V22.2503C8.75 22.5743 8.958 22.8613 9.266 22.9633C9.343 22.9883 9.422 23.0003 9.5 23.0003C9.734 23.0003 9.96 22.8903 10.104 22.6943L12.817 19.0023L8.75 17.6123Z"
                    fill="white"
                  />
                  <path
                    d="M23.685 0.139089C23.455 -0.0239114 23.153 -0.0459114 22.903 0.0850886L0.403045 11.8351C0.137044 11.9741 -0.0199555 12.2581 0.00204448 12.5571C0.0250445 12.8571 0.224045 13.1131 0.507045 13.2101L6.76205 15.3481L20.083 3.95809L9.77505 16.3771L20.258 19.9601C20.336 19.9861 20.418 20.0001 20.5 20.0001C20.636 20.0001 20.771 19.9631 20.89 19.8911C21.08 19.7751 21.209 19.5801 21.242 19.3611L23.992 0.861089C24.033 0.581089 23.915 0.303089 23.685 0.139089Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_13990">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              GỬI THÔNG TIN
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
