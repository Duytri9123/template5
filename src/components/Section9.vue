<template>
  <section class="relative mt-15 md:mt-25 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]">
    <div class="w-full flex flex-col justify-center items-center gap-14">
      <h1
        class="text-lg md:text-xl lg:text-3xl xl:text-[38px] font-bold xl:w-2/5 text-center"
      >
        Quy trình thăm khám ung thư tuyến giáp tại BVĐK Phương Đông
      </h1>
      <div class="2xl:w-3/4  w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6 lg:gap-y-10 gap-y-4 text-center lg:p-6">
        <template v-for="(item, index) in symptoms" :key="index">
          <div
            class="flex flex-col items-center p-8 xl:col-span-1  bg-white drop-shadow-2xl rounded-3xl sm:m-2 m-4"
          >
            <div class="-translate-y-15">
              <img :src="item.image" :alt="item.title" class="w-full object-cover" />
            </div>
            <div class="flex flex-col items-center justify-between h-full">
              <div class="flex flex-col gap-4">
                <h1
                  class="font-bold lg:text-2xl sm:text-lg text-black font-lato text-center"
                >
                  {{ item.title }}
                </h1>

                <p
                  class="text-[#252525] text-sm lg:text-lg font-semibold font-lato w-full text-center"
                >
                  {{ item.desc }}
                </p>
              </div>
              <div class="relative  rounded-xl bg-white flex flex-col items-center justify-center gap-5 translate-y-10">
                <component :is="icons[item.icon]" />
                <div class="relative bg-background w-5/2 h-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </template>
      </div>
      <a
        href="tel:19001806"
        class="max-w-72 flex text-justify uppercase items-center tracking-[0.8px] justify-center rounded-full px-2 h-12 bg-button text-white font-bold drop-shadow-md/25 text-xs md:text-sm xl:text-base hover:bg-button whitespace-nowrap"
      >
        <span class="text-white mx-2">Đăng ký tư vấn</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import IconTongDai from "@/components/icons/IconTongDai.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
import IconKetqua from "@/components/icons/IconKetqua.vue";
import IconThamKham from "@/components/icons/IconThamKham.vue";
import Buoc1 from "../Images/buoc1.png";
import Buoc2 from "../Images/buoc2.png";
import Buoc3 from "../Images/buoc3.png";
import Buoc4 from "../Images/buoc4.png";

const symptoms = [
  {
    image: Buoc1,
    icon: "tongdai",
    title: "Bước 1:",
    desc:
      "Khách hàng liên hệ thông qua tổng đài 19001806 hoặc đến bệnh viện trực tiếp để được tư vấn và đặt lịch khám.",
  },
  {
    image: Buoc2,
    icon: "thanhtoan",
    title: "Bước 2:",
    desc: "Thanh toán chi phí của gói khám.",
  },
  {
    image: Buoc3,
    icon: "thamkham",
    title: "Bước 3:",
    desc: "Thực hiện các bước thăm khám, xét nghiệm và chẩn đoán bằng hình ảnh tại viện.",
  },
  {
    image: Buoc4,
    icon: "ketqua",
    title: "Bước 4:",
    desc: "Bác sĩ trả kết quả, kết luận và tư vấn quá trình điều trị tiếp theo (nếu có).",
  },
];
const icons = {
  tongdai: IconTongDai,
  thanhtoan: IconMoney,
  thamkham: IconThamKham,
  ketqua: IconKetqua,
};
</script>

<style lang="scss" scoped></style>
