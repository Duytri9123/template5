<template>
  <div class="flex flex-row ">
    <div class="relative w-full hidden lg:flex xl:-translate-y-16 -translate-y-16 ">
      <img
        src="../Images/background-pd.png"
        alt="background"
        class="w-full object-cover min-h-[500px] 2xl:min-h-[720px]"
      />
      <div class="absolute inset-0 flex items-center justify-center z-10 mt-10">
        <Section1 />
      </div>
    </div>

    <!-- mobile -->
    <div class="relative w-full lg:hidden flex -translate-y-14 bg-background justify-center pt-4">
      <div class="relative inset-0 flex items-center justify-center z-10">
        <Section1 />
      </div>
    </div>


  </div>
</template>

<script setup>
import Section1 from "./Section1.vue";
</script>

<style lang="scss" scoped></style>
