<script lang="ts" setup>
import { onMounted } from 'vue';

const schoolRecords = [
  { count: 1200, record: "Sikeresen végzett diák" },
  { count: 10, record: "Képzés" },
  { count: 30, record: "Szakoktató" },
  { count: 20, record: "Program évente" },
  { count: 50, record: "Tapasztalt munkatárs" },
];

const settlements = [
  "Baja",
  "Bácsalmás",
  "Bácsbokod",
  "Bátya",
  "Dunafalva",
  "Dusnok",
  "Hercegszántó",
  "Nagybaracska",
  "Rém",
  "Sükösd",
  "Szakmár",
  "Szeremle",
  "Vaskút",
];


</script>

<template>
  <div class="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-container dark:bg-zinc-950 text-justify">
    <div class="w-full h-full">
      <!-- Első szekció -->
      <section class="w-full min-h-screen snap-center flex flex-col justify-center content-center items-center gap-10 md:gap-20 p-4">
        <h3 class="text-2xl md:text-3xl">Az intézményről</h3>
        <h3 class="text-3xl md:text-4xl text-center">Danubia Alapfokú Művészeti Iskola</h3>
        <h3 class="text-base md:text-lg text-center">1994 óta a kreativitás, szabadság és ifjak szolgálatában</h3>
        <span class="w-2/3 md:w-1/3 h-1 rounded-full bg-zinc-900 dark:bg-zinc-300"></span>

        <div class="flex flex-wrap justify-center items-center gap-5 w-full px-2">
          <div
            v-for="(record, key) in schoolRecords"
            :key="key"
            class="flex flex-col justify-center items-center gap-3 md:gap-5 w-[120px] md:w-[15rem]"
          >
            <span class="text-2xl md:text-3xl">{{ record.count }}+</span>
            <span class="text-sm md:text-base text-center">{{ record.record }}</span>
          </div>
        </div>

        <h3 class="text-red-500 text-sm md:text-base text-center px-4">
          Az adatok nem felelnek meg a valóságnak az oldal jelenlegi pillanatában
        </h3>
      </section>

      <!-- Második szekció -->
      <section class="w-full min-h-screen snap-center flex flex-col items-center justify-center gap-6 md:gap-10 p-4">
        <h3 class="text-2xl md:text-3xl">Települések</h3>
        <div class="w-full md:w-2/3 lg:w-1/2 flex flex-wrap justify-center items-center gap-3 md:gap-5">
          <h3
            v-for="(settlement, key) in settlements"
            :key="key"
            class="text-sm md:text-lg px-3 py-1 bg-zinc-800 dark:bg-zinc-700 text-zinc-100 rounded-lg m-1"
          >
            - {{ settlement }} -
          </h3>
        </div>
      </section>

      <!-- Harmadik szekció -->
      <section class="w-full min-h-screen snap-center flex flex-col items-center justify-center p-4 md:px-10 lg:px-20">
        <div class="flex flex-col md:flex-row justify-around content-center items-center h-full gap-8 md:gap-10 lg:gap-20">
          <div class="flex flex-col justify-center content-start items-start w-full md:w-1/2 gap-4 md:gap-5">
            <h3 class="text-xl md:text-2xl">
              A Danubia Alapfokú Művészeti Iskola elnevezése és jelképe
            </h3>
            <p class="text-justify text-sm md:text-base">
              A danubia szó a Duna latin Danubius nevéből származik, köznapi jelentésében keskeny vászonkötésű pamutból szőtt szalagot értünk rajta. A választás azért esett a latin eredetű elnevezésre, mert e név egy egységes szellemiségű, klasszikus gyökerű, de a népi kultúrát is magába foglaló művészetszemléletre utal. A magyar gondolkodásban és művészetben a Dunának, mint országokat és a Duna mentén élő népek évezredes hagyományait összekötő folyamnak szimbolikus jelentése általánosan ismert. Miként a Duna összeköti a különböző kultúrákat, s a danubia szalag a ruha részeit egésszé egyesíti, akként a Danubia AMI jelképesen egybefogja a többnemzetiségű településeken folyó művészeti képzést.
              A művészetek és oktatásuk egyenrangúságát és egységét – Oláh Gábor pécsi grafikusművész munkája által – a különböző művészeti ágak szimbólumainak a D betű iniciáléjába történt egybeszerkesztése fejezi ki. A kék és aranysárga alkalmazása Baja városának adja meg a tiszteletet.
            </p>
          </div>
          <div class="groupPic w-full h-[300px] md:w-[45%] md:h-[45%] rounded-lg"></div>
        </div>
      </section>

      <!-- Negyedik szekció - Táblázat -->
      <section class="w-full min-h-screen snap-center flex flex-col items-center justify-center gap-6 md:gap-10 p-4">
        <h3 class="text-xl md:text-3xl text-center">A térség kulturális életében jelenleg fontos szerepet betöltő művészeti csoportjaink:</h3>
        <div class="w-full overflow-x-auto">
          <table class="border-[2px] border-zinc-900 w-full md:w-10/12 mx-auto" cellspacing="0" cellpadding="5">
            <thead>
              <tr class="bg-zinc-200 dark:bg-zinc-800">
                <th class="border p-2 text-sm md:text-base">Esemény</th>
                <th class="border p-2 text-sm md:text-base">Helyszín(ek)</th>
                <th class="border p-2 text-sm md:text-base">Közreműködő csoportok</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Jánoska-eresztés</td>
                <td class="border p-2 text-xs md:text-sm">Baja</td>
                <td class="border p-2 text-xs md:text-sm">Danubia néptánccsoportok (Baja, Szakmár, Nagybaracska, Dunafalva, Hercegszántó)</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Halászléfőző fesztivál</td>
                <td class="border p-2 text-xs md:text-sm">Baja</td>
                <td class="border p-2 text-xs md:text-sm">Bátmonostori Danubia Tamburazenekar, Danubia gyermek-tamburazenekar</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Folklórfesztivál</td>
                <td class="border p-2 text-xs md:text-sm">Baja, Kalocsa</td>
                <td class="border p-2 text-xs md:text-sm">Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó), Bátmonostori Danubia Tamburazenekar</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Falunapok</td>
                <td class="border p-2 text-xs md:text-sm">Szeremle, Dunafalva, Szakmár, Vaskút, Nagybaracska, Bácsbokod, Hercegszántó, Bátya, Sükösd, Felsőszentiván</td>
                <td class="border p-2 text-xs md:text-sm">Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár), Danubia Tamburazenekar</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Szüreti felvonulások és bálak</td>
                <td class="border p-2 text-xs md:text-sm">Szeremle, Dunafalva, Szakmár, Vaskút, Nagybaracska, Bácsbokod, Hercegszántó, Bátya, Sükösd</td>
                <td class="border p-2 text-xs md:text-sm">Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Rác-pünkösd</td>
                <td class="border p-2 text-xs md:text-sm">Dusnok</td>
                <td class="border p-2 text-xs md:text-sm">Kraul Antal Ifjúsági Fúvósegyesület, Bátyai Ifjúsági Fúvószenekar</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Ifjú Zenebarátok Találkozója</td>
                <td class="border p-2 text-xs md:text-sm">Madaras</td>
                <td class="border p-2 text-xs md:text-sm">Forgó Zoltán Ifj. Fúvószenekar, Felsőszentiváni Kísérleti Színpad</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Karácsonyi hangversenyek</td>
                <td class="border p-2 text-xs md:text-sm">Bácsbokod, Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Bajai Táncsport Egyesület csoportjai, Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Vízkereszti koncert</td>
                <td class="border p-2 text-xs md:text-sm">Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Kraul Antal Ifjúsági Fúvósegyesület</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Temetések</td>
                <td class="border p-2 text-xs md:text-sm">Bácsbokod, Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Bátmonostori Danubia Tamburazenekar, Dusnoki Danubia Tambura együttes</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Prélók</td>
                <td class="border p-2 text-xs md:text-sm">Dusnok, Hercegszántó, Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Danubiás zeneiskolások: gitárosok, zongoristák, tamburások</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Március 15-i megemlékezés</td>
                <td class="border p-2 text-xs md:text-sm">Minden településen</td>
                <td class="border p-2 text-xs md:text-sm">Bátyai Ifjúsági Fúvószenekar, Kraul Antal Ifjúsági Fúvósegyesület</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Gyermektáncszín találkozó</td>
                <td class="border p-2 text-xs md:text-sm">Nagybaracska</td>
                <td class="border p-2 text-xs md:text-sm">Forgó Zoltán Ifj. Fúvószenekar, Bátyai Ifjúsági Fúvószenekar</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Húsvéti templomi koncert</td>
                <td class="border p-2 text-xs md:text-sm">Bácsbokod, Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Dusnoki Danubia Tambura együttes, Hercegszántói Veseli Santovcani néptáncegyüttes</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700">
                <td class="border p-2 text-xs md:text-sm">Pünkösdi koncert</td>
                <td class="border p-2 text-xs md:text-sm">Kalocsa, Bátya</td>
                <td class="border p-2 text-xs md:text-sm">Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
              </tr>
              <tr class="border-b border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
                <td class="border p-2 text-xs md:text-sm">Társastánc Találkozó</td>
                <td class="border p-2 text-xs md:text-sm">Baja</td>
                <td class="border p-2 text-xs md:text-sm">Bátyai Ifjúsági Fúvószenekar, Kraul Antal Ifjúsági Fúvósegyesület, Forgó Zoltán Ifj. Fúvószenekar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Ötödik szekció -->
      <section class="w-full min-h-screen snap-center flex flex-col items-center justify-center gap-6 md:gap-10 p-6 md:px-20">
        <div class="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/2 h-full gap-6 md:gap-10">
          <h3 class="text-2xl md:text-3xl">Iskolatörténet</h3>
          <p class="text-sm md:text-base text-center md:text-justify">
            Intézményünk az országban tizenhatodik magánfenntartású zeneiskolaként, bajai fenntartói és igazgatási székhellyel a Baja környéki kistelepüléseken 1994 szeptemberében kezdte meg működését.
            A közoktatási feladatokat ellátó Magánzeneiskola azon vidéki tanulók részére jött létre, akik addig földrajzi, illetve szociális helyzetükből adódóan nem vehettek részt alapfokú zeneoktatásban.
            1996-tól az iskola megkezdte a nem zenei (képző- és iparművészeti, színművészeti és táncművészeti) tárgyak oktatását.
            A 2000/2001. tanévtől Danubia Alapfokú Művészeti Iskola néven Baján is megindult az alapfokú művészetoktatás.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.groupPic{
  background-image: url("../../assets/pics/groupPic.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.scroll-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}


@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
