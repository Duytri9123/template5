<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-transform duration-500',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
    class=" relative w-screen flex justify-center items-center h-14 lg:h-16 pt-6"
  >
    <div
      class="flex sm:h-10 h-8  justify-between items-center w-full gap-2 2xl:w-6/8 px-3.5"
    >
      <!-- LOGO -->
      <a href="#" class="h-full lg:min-w-[176px] flex items-center">
        <img src="../Images/logo.png" alt="logo" class="h-full object-contain" />
      </a>
      <!-- navigate -->
      <nav class="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-9">
        <a
          v-for="(item, index) in navtive"
          :key="index"
          href="#"
          class="font-lato font-bold text-black hover:underline hover:text-blue-600 text-sm xl:text-base whitespace-nowrap text-justify"
          >{{ item }}</a
        >
      </nav>
      <!-- Hotline -->
      <a
        href="tel:19001806"
        class=" hidden lg:flex items-center rounded-full px-2 h-10 bg-button text-white font-bold drop-shadow-md/25 text-xs md:text-sm xl:text-base hover:bg-button whitespace-nowrap"
      >
        <div class="bg-white rounded-full p-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8043 13.842L14.8268 12.8645C14.3384 12.3761 13.5468 12.3761 13.0593 12.8645L12.2909 13.6328C12.1193 13.8045 11.8593 13.862 11.6376 13.7645C10.5243 13.277 9.42427 12.5378 8.44344 11.557C7.46677 10.5803 6.7301 9.4853 6.24177 8.37613C6.1401 8.14697 6.19927 7.8778 6.37677 7.7003L7.0651 7.01197C7.62427 6.4528 7.62427 5.66197 7.13594 5.17363L6.15844 4.19613C5.5076 3.5453 4.4526 3.5453 3.80177 4.19613L3.25844 4.73863C2.64094 5.35613 2.38344 6.24697 2.5501 7.1303C2.96177 9.3078 4.22677 11.692 6.2676 13.7328C8.30844 15.7736 10.6926 17.0386 12.8701 17.4503C13.7534 17.617 14.6443 17.3595 15.2618 16.742L15.8043 16.1995C16.4551 15.5486 16.4551 14.4936 15.8043 13.842V13.842Z"
              stroke="#0A9949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8335 5.82599C11.6927 5.81433 12.556 6.13266 13.2118 6.78849"
              stroke="#0A9949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5685 4.43188C14.261 3.12438 12.5468 2.47021 10.8335 2.47021"
              stroke="#0A9949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1744 9.16691C14.1861 8.30774 13.8677 7.44441 13.2119 6.78857"
              stroke="#0A9949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5684 4.43164C16.8759 5.73914 17.53 7.45331 17.53 9.16664"
              stroke="#0A9949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <span class="text-white mx-2">Gọi 1900 1806</span>
      </a>

      <!--icon bar -->
      <button
        type="button"
        @click="handOpenModal"
        class="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
      >
        <svg
          class="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <!-- nagative mobile -->
      <div
        v-show="isModal"
        @click.self="closeModal"
        class="bg-gray-200/50 h-screen w-screen fixed top-0 left-0 lg:hidden"
      >
        <div
          class="lg:hidden bg-white h-screen flex md:w-1/2 w-3/4 fixed top-0 right-0 flex-col shadow-lg"
        >
          <div class="flex justify-between lg:h-16 h-16 items-center md:px-4 mb-0.5 px-2">
            <a href="#" class="lg:h-10 h-8">
              <img src="../Images/logo.png" alt="logo" class="object-fit h-full" />
            </a>
            <button
              type="button"
              @click="closeModal"
              class="text-gray-700 hover:text-blue-600 focus:outline-none mr-4"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav class="relative flex flex-col pb-4 bg-blue-100/30 h-full">
            <a
              v-for="(item, index) in navtive"
              :key="index"
              href="#"
              @click="isModal = false"
              class="block text-gray-700 hover:text-blue-600 hover:bg-amber-100 font-medium py-4 px-4 w-full shadow-[0_2px_0_rgba(0,0,0,0.2)] transform hover:translate-y-1 transition duration-300 border-t-2 border-gray-200"
              >{{ item }}</a
            >
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const navtive = ref([
  "Giới thiệu",
  "Đối tượng khách hàng",
  "Quy trình",
  "Bảng giá",
  "Cảm nhận của khách hàng",
  "Đội ngũ bác sĩ",
]);
const isModal = ref(false);
const isHidden = ref(false);
let lastScrollY = window.scrollY;

const handOpenModal = () => {
  isModal.value = true;
  document.body.classList.add("overflow-hidden");
};

const closeModal = () => {
  isModal.value = false;
  document.body.classList.remove("overflow-hidden");
};

const handleScroll = () => {
  const currentY = window.scrollY;

  if (currentY > lastScrollY && currentY > 50) {
    isHidden.value = true;
  } else {
    isHidden.value = false; // cuộn lên trên hoặc không cuộn
  }

  lastScrollY = currentY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
