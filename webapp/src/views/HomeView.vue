<script setup lang="ts">
import { computed } from 'vue';

const homeSvgs = {
  wave: "wave.svg",
  blob: "blob.svg",
  lightYellowCircle: "light_yellow_circle.svg",
  darkYellowCircle: "dark_yellow_circle.svg",
  layered: "layered.svg",
  blueFin: "blue_fin.svg",
  lightYellowFin: "light_yellow_fin.svg",
  darkYellowFin: "dark_yellow_fin.svg"
};

const svgFromFile = import.meta.glob('@/assets/svgs/home/*.svg', { eager: true, as: 'raw' }) as Record<string, string>;

const processedSvg = computed(() => {
  const svgs: Record<string, string> = {};

  Object.entries(homeSvgs).forEach(([key, fileName]) => {
    const svgPath = `/src/assets/svgs/home/${fileName}`;
    if (svgFromFile[svgPath]) {
      svgs[key] = svgFromFile[svgPath]
        .replace(/<svg/, '<svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080"');
    }
  });

  return svgs;
});
</script>

<template>
  <div class="w-full h-full">
    <div class="absolute left-0 top-0 w-full h-screen">
      <!--wave.svg-->
      <div v-html="processedSvg.wave" class="absolute w-full h-full object-cover"></div>


    </div>


    <section class="relative w-full h-full">
      <div class="lightYellow absolute left-[17%] top-1/2 w-[35%] h-[35%] z-[-1]"><!--Circle--></div>
      <div class="darkYellow absolute right-[17%] top-0 w-[35%] h-[35%] z-[-1]"><!--Circle--></div>
      <div class="relative flex flex-col justify-center content-center items-center w-full h-full gap-5">

        <div class="relative flex flex-col justify-center w-[60%] h-[60%] content-center items-center z-10 text-zinc-100 dark:text-zinc-100 name">

          <div class="flex flex-col justify-center content-start items-start gap-2">
            <h3 class="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl">Danubia</h3>
            <h3 class="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl">Alapfokú</h3>
            <h3 class="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl">Művészeti Iskola</h3>
          </div>
        </div>
        <!--<div class="w-2/6 flex flex-row justify-center content-center items-center flex-wrap gap-5">

        </div>-->
      </div>
    </section>


    <section class="relative w-full h-screen bg-blue-600">
      <div class="layered absolute w-[80%] h-[80%] top-[15%] left-[-10%]"></div>
      <div class="relative flex flex-row justify-center items-center w-full h-full gap-20">
        <div class="banner relative w-[400px] h-[500px] rounded-xl"></div>
        <div class="flex flex-col justify-center content-start items-start gap-5 w-1/2 h-full">
          <h3 class="text-3xl text-zinc-300 dark:text-zinc-100 w-full text-justify leading-relaxed">
            Miként a Duna összeköti a különböző kultúrákat,
            s a danubia szalag a ruha részeit egésszé egyesíti,
            akként
            a Danubia AMI jelképesen egybefogja a többnemzetiségű településeken folyó művészeti képzést.
          </h3>
        </div>
      </div>
    </section>


    <section class="relative w-full h-screen overflow-hidden">
      <div class="relative flex flex-row justify-center items-center w-full h-full gap-20">
        <div v-html="processedSvg.blueFin" class="absolute bottom-[-75%] left-0 w-full h-full"></div>
        <div v-html="processedSvg.lightYellowFin" class="absolute top-0 right-[-70%] w-full h-full"></div>
        <div v-html="processedSvg.darkYellowFin" class="absolute bottom-[-65%] right-[-80%] w-full h-full"></div>
        <div class="flex flex-col justify-center content-start items-start w-1/4 ">
          <h3 class="text-4xl dark:text-zinc-100">Célunk</h3>
          <p class="text-lg font-[600] dark:text-zinc-100 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe optio dolorum voluptas labore at quas, enim voluptatum suscipit quod nihil animi mollitia dolor eos? Consectetur incidunt tenetur provident rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe optio dolorum voluptas labore at quas, enim voluptatum suscipit quod nihil animi mollitia dolor eos? Consectetur incidunt tenetur provident rerum?</p>
        </div>
        <h3 class="text-4xl dark:text-zinc-100">-</h3>
        <div class="flex flex-col justify-center content-center items-center z-[100]">
          <div class="principle w-[20rem] h-[20rem] rounded-full"><!--Principle--></div>
          <h3 class="text-4xl dark:text-zinc-100">Petővári László</h3>
          <h3 class="text-3xl dark:text-zinc-100">Az intézmény vezetője</h3>
        </div>
      </div>
    </section>


    <section class="relative w-full h-screen bg-gray-200">
      <div class="relative flex flex-col justify-center items-center w-full h-full">
        <div class="flex flex-row justify-center content-center items-center gap-20">
          <div class="logo w-[20rem] h-[20rem]">
            <!--Logo-->
          </div>
          <div class="flex flex-col justify-center content-start items-start gap-20">
            <div class="flex flex-col justify-center content-start items-start gap-5">
              <h3 class="text-3xl">Jelentkezz bátran!</h3>
              <h3 class="text-3xl">Eseményeinken szívesen látunk</h3>
            </div>
            <div class="flex flex-col justify-center content-start items-start gap-5">
              <h3 class="text-3xl">Danubia iroda:</h3>
              <h3 class="text-3xl">+367012345</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.name{
  background-image: url("../assets/svgs/home/blob.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.lightYellow{
  background-image: url("../assets/svgs/home/light_yellow_circle.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.darkYellow{
  background-image: url("../assets/svgs/home/dark_yellow_circle.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.layered{
  background-image: url("../assets/svgs/home/layered.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.banner{
  background-image: url("../assets/pics/banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.principle{
  background-image: url("../assets/pics/principle.jpg");
  background-position: 20% 0;
  background-size: cover;
  background-repeat: no-repeat;
}
.logo{
  background-image: url("../assets/pics/logo.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
