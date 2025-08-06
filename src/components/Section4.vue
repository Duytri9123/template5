<template>
  <section class="relative mt-15 md:mt-25 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]">
    <div class="w-full flex flex-col justify-center items-center gap-14">
      <h1 class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold">
        Dấu hiệu nhận biết Ung thư tuyến giáp
      </h1>
      <div class="w-8/9 2xl:w-2/3 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-0 text-center">
        <template v-for="(item, index) in symptoms" :key="index">
          <div class="flex flex-col items-center justify-center gap-2 py-4 xl:col-span-1">
            <div class="rounded-xl bg-white flex items-center justify-center">
              <component :is="icons[item.icon]" />
            </div>

            <h3 class="font-bold text-base sm:text-lg text-black font-lato text-center">
              {{ item.title }}
            </h3>

            <p class="text-[#454545] text-sm sm:text-base font-lato w-full text-center">
              {{ item.desc }}
            </p>
          </div>

          <!-- Đường kẻ dọc chia cột -->
          <div
            v-if="(index + 1) % columnCount !== 0"
            class="hidden sm:block h-4/5 w-px bg-[#EBEBEB] mx-auto"
          ></div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import IconHo from "@/components/icons/IconHo.vue";
import IconMetMoi from "@/components/icons/IconMetMoi.vue";
import IconGiongNoi from "@/components/icons/IconGiongNoi.vue";
import IconCoSung from "@/components/icons/IconCoSung.vue";
import IconKhoTho from "@/components/icons/IconKhoTho.vue";
import IconCoDau from "@/components/icons/IconCoDau.vue";

const columnCount = ref(1);

const symptoms = [
  {
    icon: "ho",
    title: "Ho kéo dài mãi",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    icon: "metmoi",
    title: "Cơ thể mệt mỏi",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    icon: "giongnoi",
    title: "Thay đổi giọng nói",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    icon: "cosung",
    title: "Các tuyến ở cổ bị sưng",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    icon: "khotho",
    title: "Khó thở, khó nuốt",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
  {
    icon: "codau",
    title: "Cổ đau phía trước",
    desc: "Một số dấu hiệu ung thư tuyến giáp giai đoạn đầu cần hết sức lưu ý",
  },
];
const icons = {
  ho: IconHo,
  metmoi: IconMetMoi,
  giongnoi: IconGiongNoi,
  cosung: IconCoSung,
  khotho: IconKhoTho,
  codau: IconCoDau,
};

const updateColumnCount = () => {
  const width = window.innerWidth;
  if (width >= 1280) columnCount.value = 3;
  else if (width >= 640) columnCount.value = 2;
  else columnCount.value = 1;
};

onMounted(() => {
  updateColumnCount();
  window.addEventListener("resize", updateColumnCount);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateColumnCount);
});
</script>

<style lang="scss" scoped></style>
