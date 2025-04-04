<script setup lang="ts">
import { computed } from 'vue';
import Button from '@/components/global/Button.vue';
import Theme from '@/components/global/Theme.vue';
import router from '@/router';
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
  <div class="w-full h-full bg-zinc-100 dark:bg-zinc-950">
    <div class="absolute left-0 top-0 w-full h-screen">
      <!--wave.svg-->
      <div v-html="processedSvg.wave" class="absolute w-full h-full object-cover"></div>


    </div>


    <section class="relative w-full h-full">
      <div class="lightYellow absolute left-[17%] top-1/2 w-[35%] h-[35%] z-[-1]"><!--Circle--></div>
      <div class="darkYellow absolute right-[17%] top-0 w-[35%] h-[35%] z-[-1]"><!--Circle--></div>
      <div class="relative flex flex-col justify-center content-center items-center w-full h-full gap-5">

        <div class="relative flex flex-col justify-center md:w-[60%] md:h-[60%] w-full content-center items-center z-10 text-zinc-100 dark:text-zinc-100 gap-10 name">

          <div class="flex flex-col justify-center content-start items-start gap-2 ami">
            <h3 class="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:homeText text-4xl">Danubia</h3>
            <h3 class="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:homeText text-4xl">Alapfokú</h3>
            <h3 class="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:homeText text-4xl">Művészeti Iskola</h3>
          </div>
          <div class="w-full flex flex-row justify-center content-center items-center flex-wrap gap-5">
            <Button rank="primary" size="normal" icon-position="none" text="Képzéseink" :onClick="()=> router.push('/trainings')"></Button>
            <Button rank="secondary" size="normal" icon-position="none" text="Ismerj meg minket"></Button>
            <Theme :icon-only=false></Theme>
          </div>
        </div>

      </div>
    </section>


    <section class="relative w-full h-screen bg-blue-600 px-4">
      <div class="layered absolute w-[80%] h-[80%] top-[15%] left-[-10%]"></div>
      <div class="relative flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 md:gap-20 ">
        <div class="banner relative w-2/3 md:w-1/3 h-2/6 rounded-xl"></div>
        <div class="flex flex-col justify-center content-start items-start gap-5 md:w-1/2 w-3/4">
          <h3 class="homeText text-zinc-300 dark:text-zinc-100 w-full text-justify leading-relaxed">
            Miként a Duna összeköti a különböző kultúrákat,
            s a danubia szalag a ruha részeit egésszé egyesíti,
            akként
            a Danubia AMI jelképesen egybefogja a többnemzetiségű településeken folyó művészeti képzést.
          </h3>
        </div>
      </div>
    </section>


    <section class="relative w-full h-screen overflow-hidden dark:bg-zinc-950">
      <div class="relative flex md:flex-row flex-col justify-center items-center w-full h-full py-4 gap-5 md:gap-20">
        <div v-html="processedSvg.blueFin" class="absolute bottom-[-75%] left-0 w-full h-full"></div>
        <div v-html="processedSvg.lightYellowFin" class="absolute top-0 right-[-70%] w-full h-full hidden md:block"></div>
        <div v-html="processedSvg.darkYellowFin" class="absolute bottom-[-65%] right-[-80%] w-full h-full"></div>


        <div class="flex flex-col justify-center content-start items-start  md:w-1/4 w-5/6 gap-5">
          <h3 class="text-4xl dark:text-zinc-100">Iskolatörténet</h3>
          <p class="md:text-lg text-base font-[600] dark:text-zinc-100 text-justify z-50">
            Intézményünk az országban tizenhatodik magánfenntartású zeneiskolaként, bajai fenntartói és igazgatási székhellyel a Baja környéki kistelepüléseken 1994 szeptemberében kezdte meg működését.
            A közoktatási feladatokat ellátó Magánzeneiskola azon vidéki tanulók részére jött létre, akik addig földrajzi, illetve szociális helyzetükből adódóan nem vehettek részt alapfokú zeneoktatásban.
            1996-tól az iskola megkezdte a nem zenei (képző- és iparművészeti, színművészeti és táncművészeti) tárgyak oktatását.
            A 2000/2001. tanévtől Danubia Alapfokú Művészeti Iskola néven Baján is megindult az alapfokú művészetoktatás.
          </p>
        </div>

        <h3 class="text-4xl dark:text-zinc-100 hidden md:block">-</h3>


        <div class="flex flex-col justify-center content-center items-center gap-5 z-[100]">
          <div class="principle w-[15rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] rounded-full bg-cover bg-center principle">
            <!--Principle Image-->
          </div>
          <h3 class="text-4xl dark:text-zinc-100">Petővári László</h3>
          <h3 class="homeText dark:text-zinc-100">Az intézmény vezetője</h3>
        </div>
      </div>
    </section>




    <section class="relative w-full h-screen dark:bg-zinc-950">
      <div class="relative flex flex-col justify-center items-center w-full h-full">

        <div class="flex flex-col md:flex-row justify-center items-center w-full h-full gap-5 md:gap-20">
          <div class="logo w-5/6 h-4/6 sm:w-3/6 sm:h-2/6 md:w-72 md:h-72">
            <!--Logo-->
          </div>


          <div class="flex flex-col justify-center items-center gap-20">
            <div class="flex flex-col justify-center items-center gap-5">
              <h3 class="homeText text-center">Jelentkezz bátran!</h3>
              <h3 class="homeText text-center">Eseményeinken szívesen látunk</h3>
              <div class="flex flex-row justify-center items-center gap-5">
                <Button rank="primary" size="normal" icon-position="none" text="Képzéseink" :onClick="()=> router.push('/trainings')"></Button>
                <Button rank="secondary" size="normal" icon-position="none" text="Events" :onClick="()=> router.push('/events')"></Button>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-5">
              <h3 class="homeText text-center">Danubia iroda:</h3>
              <h3 class="homeText text-center">+367012345</h3>
              <Button rank="secondary" size="normal" icon-position="none" text="Kapcsolatok" :onClick="()=> router.push('/contacts')"></Button>
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
@media only screen and (max-width: 450px) {
  .name{
    background-image: none;
    @apply bg-blue-500 py-4;
  }
  .ami{
    @apply items-center content-center text-center
  }
}
@media only screen and (min-width: 450px) {
  .name{
    @apply h-full
  }

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
  background-size: contain;
  background-repeat: no-repeat;
}
.homeText{
  @apply text-xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl  dark:text-zinc-100 z-50
}
</style>
