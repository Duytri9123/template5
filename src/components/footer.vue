<template>
  <footer
    class="relative w-screen bg-background text-white flex flex-col items-center md:mt-10 lg:mt-[5%] xl:mt-[4%] 2xl:mt-[8%]"
  >
    <div
      class="md:w-8/9 lg:w-7/8 w-full p-1 flex xl:flex-row flex-col items-center justify-center gap-3"
    >
      <div class="w-full flex flex-row xl:gap-8 text-white">
        <div class="xl:w-full w-1/2 flex flex-col items-start gap-8 text-white">
          <div class="flex items-start gap-4 w-3/4">
            <img src="../Images/Logo1.png" alt="Logo Phương Đông" />
          </div>
          <div class="flex flex-col gap-2">
            <h3
              class="font-bold  lg:text-lg md:text-base text-sm uppercase lg:whitespace-nowrap"
            >
              BỆNH VIỆN ĐA KHOA PHƯƠNG ĐÔNG
            </h3>
            <div class="flex flex-col gap-3">
              <p
                class="lg:text-lg md:text-sm text-xs xl:whitespace-nowrap lg:tracking-[0.5px]"
              >
                Địa chỉ:
                <span class="text-white font-medium break-all"
                  >Số 9, Phố Viên, Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội</span
                >
              </p>
              <p
                class="lg:text-lg md:text-sm text-xs lg:whitespace-nowrap lg:tracking-[0.5px]"
              >
                Email:
                <a
                  href="mailto:byphuongdong@phuongdonghospital.vn"
                  class="font-medium break-all"
                  >byphuongdong@phuongdonghospital.vn</a
                >
              </p>
              <p
                class="lg:text-lg md:text-sm text-xs lg:whitespace-nowrap font-medium lg:tracking-[0.5px] break-all"
              >
                info.benhvienphuongdong@gmail.com
              </p>
              <p class="lg:text-lg md:text-sm text-xs whitespace-nowrap">
                Tổng đài tư vấn: <strong>19001806</strong>
              </p>
            </div>
          </div>
        </div>
        <div
          class="xl:w-full w-1/2 flex flex-col items-start gap-3 text-white md:mt-20 mt-15"
        >
          <h4 class="font-medium md:text-xl text-lg">Thời gian mở cửa</h4>

          <div class="flex flex-col lg:gap-3 gap-2">
            <p
              class="lg:text-base md:text-sm text-xs lg:whitespace-nowrap tracking-[0.5px]"
            >
              Từ 7:00 - 19:00 từ Thứ 2 đến CN
            </p>
            <p
              class="lg:text-base md:text-sm text-xs lg:whitespace-nowrap tracking-[0.5px]"
            >
              Cấp cứu 24/7: 0833 015 115
            </p>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-row lg:items-start justify-center text-white">

        <div class="w-1/2 flex flex-col lg:items-start gap-3 text-white">
          <h4 class="font-medium md:text-xl text-lg">Liên hệ</h4>

          <div class="flex flex-col lg:gap-3 gap-2">
            <p
              class="lg:text-base md:text-sm text-xs lg:whitespace-nowrap tracking-[0.5px]"
            >
              Hotline Tiêm chủng: 0911 615 115
            </p>
            <p
              class="lg:text-base md:text-sm text-xs lg:whitespace-nowrap tracking-[0.5px]"
            >
              Hotline Hỗ trợ khách hàng: 1900 1806
            </p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col lg:items-start gap-6 text-white">
          <h4 class="font-medium md:text-xl text-lg lg:whitespace-nowrap">Mạng xã hội</h4>
          <div class="flex items-center gap-6">
            <a
              href="#"
              class=" flex items-center justify-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0016 14.0865C28.0016 6.30602 21.733 -0.000976562 14.0015 -0.000976562C6.26655 0.000773438 -0.00195312 6.30602 -0.00195312 14.0883C-0.00195312 21.118 5.11855 26.9455 11.8105 28.0025V18.1588H8.25805V14.0883H11.814V10.982C11.814 7.45227 13.9053 5.50277 17.1025 5.50277C18.6355 5.50277 20.2368 5.77752 20.2368 5.77752V9.24252H18.471C16.7333 9.24252 16.1908 10.3293 16.1908 11.444V14.0865H20.0723L19.4528 18.157H16.189V28.0008C22.8811 26.9438 28.0016 21.1163 28.0016 14.0865Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              class=" flex items-center justify-center"
            >
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0001 3.29864C26.9712 3.75457 25.8659 4.06264 24.7039 4.20188C25.9028 3.48445 26.7999 2.3553 27.2275 1.02512C26.101 1.69422 24.8682 2.1652 23.5825 2.41757C22.7179 1.49445 21.5728 0.882581 20.3248 0.676977C19.0769 0.471372 17.7959 0.683529 16.6809 1.28051C15.5659 1.87749 14.6792 2.8259 14.1584 3.97848C13.6376 5.13106 13.5119 6.42333 13.8008 7.65467C11.5183 7.54006 9.28539 6.94679 7.24699 5.91337C5.20858 4.87994 3.41025 3.42945 1.96871 1.65604C1.4758 2.50629 1.19238 3.4921 1.19238 4.54198C1.19183 5.48712 1.42458 6.41778 1.86998 7.25139C2.31537 8.085 2.95964 8.79578 3.74562 9.32068C2.83409 9.29167 1.94267 9.04537 1.14556 8.60227V8.67621C1.14547 10.0018 1.604 11.2866 2.44335 12.3126C3.2827 13.3386 4.45118 14.0426 5.7505 14.3052C4.90491 14.534 4.01837 14.5677 3.15783 14.4037C3.52443 15.5443 4.23852 16.5417 5.20014 17.2563C6.16176 17.9709 7.32276 18.3669 8.52062 18.3889C6.48719 19.9851 3.97591 20.851 1.39078 20.8472C0.932848 20.8473 0.475305 20.8206 0.0205078 20.7671C2.64457 22.4543 5.69917 23.3497 8.81882 23.3462C19.3793 23.3462 25.1524 14.5997 25.1524 7.01389C25.1524 6.76744 25.1462 6.51852 25.1351 6.27207C26.2581 5.45998 27.2274 4.45437 27.9977 3.30233L28.0001 3.29864Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              class=" flex items-center justify-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_14777)">
                  <path
                    d="M27.4169 7.59151C27.2584 7.02594 26.9495 6.51391 26.5232 6.10984C26.0849 5.69334 25.5477 5.39542 24.9622 5.24417C22.7712 4.66667 13.9932 4.66667 13.9932 4.66667C10.3338 4.62504 6.67523 4.80816 3.03823 5.21501C2.45279 5.37742 1.91656 5.68201 1.47723 6.10167C1.04557 6.51701 0.732898 7.02917 0.569565 7.59034C0.177207 9.70404 -0.0134275 11.8502 0.000231766 14C-0.0137682 16.1478 0.176398 18.2933 0.569565 20.4097C0.729398 20.9685 1.0409 21.4783 1.47373 21.8902C1.90657 22.302 2.44557 22.5995 3.03823 22.757C5.2584 23.3333 13.9932 23.3333 13.9932 23.3333C17.6573 23.375 21.3206 23.1919 24.9622 22.785C25.5477 22.6338 26.0849 22.3358 26.5232 21.9193C26.9549 21.5075 27.2617 20.9953 27.4157 20.4377C27.8183 18.3248 28.0141 16.1777 28.0002 14.0268C28.0305 11.8669 27.835 9.70967 27.4169 7.59034V7.59151ZM11.2026 17.9947V10.0065L18.5059 14.0012L11.2026 17.9947Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_14777">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="#"
              class="bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9995 9.7207C11.643 9.7207 9.71993 11.6438 9.71993 14.0003C9.71993 16.3568 11.643 18.2799 13.9995 18.2799C16.356 18.2799 18.2791 16.3568 18.2791 14.0003C18.2791 11.6438 16.356 9.7207 13.9995 9.7207ZM26.8351 14.0003C26.8351 12.2281 26.8511 10.472 26.7516 8.70297C26.6521 6.64826 26.1833 4.8247 24.6808 3.32219C23.1751 1.81647 21.3548 1.35095 19.3 1.25142C17.5278 1.15189 15.7717 1.16795 14.0027 1.16795C12.2305 1.16795 10.4744 1.15189 8.70541 1.25142C6.6507 1.35095 4.82714 1.81968 3.32463 3.32219C1.81891 4.82791 1.35339 6.64826 1.25386 8.70297C1.15434 10.4752 1.17039 12.2313 1.17039 14.0003C1.17039 15.7693 1.15434 17.5286 1.25386 19.2976C1.35339 21.3523 1.82212 23.1759 3.32463 24.6784C4.83035 26.1841 6.6507 26.6496 8.70541 26.7491C10.4776 26.8487 12.2337 26.8326 14.0027 26.8326C15.7749 26.8326 17.5311 26.8487 19.3 26.7491C21.3548 26.6496 23.1783 26.1809 24.6808 24.6784C26.1865 23.1727 26.6521 21.3523 26.7516 19.2976C26.8543 17.5286 26.8351 15.7725 26.8351 14.0003ZM13.9995 20.585C10.3556 20.585 7.4148 17.6442 7.4148 14.0003C7.4148 10.3564 10.3556 7.41556 13.9995 7.41556C17.6434 7.41556 20.5842 10.3564 20.5842 14.0003C20.5842 17.6442 17.6434 20.585 13.9995 20.585ZM20.8539 8.68371C20.0031 8.68371 19.3161 7.99666 19.3161 7.14588C19.3161 6.2951 20.0031 5.60806 20.8539 5.60806C21.7047 5.60806 22.3917 6.2951 22.3917 7.14588C22.392 7.3479 22.3524 7.54799 22.2752 7.73468C22.198 7.92138 22.0847 8.091 21.9419 8.23386C21.799 8.37671 21.6294 8.48997 21.4427 8.56717C21.256 8.64436 21.0559 8.68396 20.8539 8.68371Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="border-t w-screen border-white/14 text-white text-base mt-10 p-5 items-center flex justify-center text-center"
    >
      © Copyright 2022 Bệnh Viện Đa khoa Phương Đông. All rights reserved
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
