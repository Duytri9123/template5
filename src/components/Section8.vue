<template>
  <div class="relative mt-15 md:mt-20 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]">
    <div
      class="relative flex flex-col justify-center items-center lg:item-start w-full p-4 bg-background py-[5%]"
    >
      <div
        class="flex flex-col justify-center items-center 2xl:gap-6 lg:gap-3 gap-3 w-full md:px-8 lg:px-3 2xl:px-0 p-1 2xl:w-3/4 xl:w-9/10 lg:w-full text-white"
      >
        <h1
          class="text-lg md:text-xl lg:text-3xl 2xl:text-[38px] font-bold mb-4 text-center lg:w-1/2 p-2"
        >
          Lợi ích khi sử dụng dịch vụ Tầm soát ung thư tuyến giáp
        </h1>
        <div class="space-y-3 xl:space-y-4 flex flex-row-reverse">
          <div
            class="text-white text-sm md:text-base grid lg:grid-cols-2 grid-cols-1 2xl:gap-8npm lg:gap-4 gap-4 font-medium"
          >
            <div
              v-for="(item, index) in targets"
              :key="index"
              class="flex items-center gap-4 bg-white/15 backdrop-blur-[15px] justify-center px-4 xl:py-5 lg:py-3 py-4 border border-white xl:rounded-[15px] rounded-2xl"
            >
              <div
                class="absolute left-1/8 transform top-0 h-[4px] w-[8%] bg-white rounded-full"
              ></div>
              <div class="shrink-0">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.2716 13.2321L27.2255 11.1864C26.7399 10.7008 26.342 9.7412 26.342 9.053V6.15988C26.342 4.78363 25.2177 3.65934 23.8418 3.65861H20.9475C20.2601 3.65861 19.2994 3.25995 18.8137 2.77471L16.768 0.729012C15.796 -0.243004 14.2045 -0.243004 13.2324 0.729012L11.1867 2.77617C10.7007 3.26178 9.73887 3.65934 9.05294 3.65934H6.15982C4.7854 3.65934 3.65965 4.78363 3.65965 6.15988V9.05308C3.65965 9.73856 3.26179 10.7012 2.77611 11.1865L0.73005 13.2322C-0.242699 14.2042 -0.242699 15.7957 0.73005 16.7693L2.77611 18.815C3.26208 19.3006 3.65965 20.2629 3.65965 20.9484V23.8416C3.65965 25.2164 4.7854 26.3422 6.15982 26.3422H9.05301C9.74041 26.3422 10.7011 26.74 11.1868 27.2253L13.2325 29.2718C14.2045 30.243 15.796 30.243 16.7681 29.2718L18.8138 27.2253C19.2998 26.7397 20.2602 26.3422 20.9476 26.3422H23.8419C25.2177 26.3422 26.342 25.2164 26.342 23.8416V20.9484C26.342 20.2599 26.7403 19.3003 27.2256 18.815L29.2716 16.7693C30.2428 15.7957 30.2428 14.2042 29.2716 13.2321ZM13.0157 20.6254L7.49974 15.1087L9.26755 13.3413L13.0162 17.0899L20.7327 9.3752L22.5 11.1426L13.0157 20.6254Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="leading-snug pt-1">{{ item }}</p>
              <div
                class="absolute bottom-0 right-1/8 transform -translate-x-1/2 h-[4px] w-[8%] bg-white rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const targets = [
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
  "Bệnh viện có khuôn viên khang trang, hiện đại và trong lành với hệ thống cây xanh rộng khắp, rất lý tưởng trong việc điều trị và hồi phục của người bệnh.",
];
</script>

<style lang="scss" scoped></style>
