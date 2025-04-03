<script lang="ts" setup>
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
  <div class="flex flex-col justify-center items-center w-full dark:bg-zinc-950">

    <div class="flex flex-col justify-center items-center gap-20 w-full h-screen">
      <h3 class="text-3xl">Az intézményről</h3>
      <h3 class="text-4xl">Danubia Alapfokú Művészeti Iskola</h3>
      <h3 class="text-lg">1994 óta a kreativitás, szabadság és ifjak szolgálatában</h3>
      <span class="w-1/3 h-1 rounded-full bg-zinc-900 dark:bg-zinc-300"></span>

      <div class="flex flex-wrap justify-center items-center gap-5 w-full">
        <div
          v-for="(record, key) in schoolRecords"
          :key="key"
          class="flex flex-col justify-center items-center gap-5 w-[15rem]"
        >
          <span class="text-3xl">{{ record.count }}+</span>
          <span class="text-base">{{ record.record }}</span>
        </div>
      </div>

      <h3 class="text-red-500">
        Az adatok nem felelnek meg a valóságnak az oldal jelenlegi pillanatában
      </h3>
    </div>

    <div class="flex flex-col justify-center items-center gap-10 w-full h-screen dark:bg-zinc-950">
      <h3 class="text-3xl">Települések</h3>
      <div class="w-full flex flex-wrap justify-center items-center gap-5">
        <h3
          v-for="(settlement, key) in settlements"
          :key="key"
          class="text-lg px-4 py-1 bg-zinc-800 dark:bg-zinc-700 text-zinc-100 rounded-lg"
        >
          - {{ settlement }} -
        </h3>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center w-full h-screen dark:bg-zinc-950 px-20">
      <div class="flex flex-row justify-around content-center items-center h-full gap-20">
        <div class="flex flex-col justify-center content-start items-start h-full w-1/2 gap-5">
          <h3 >
            A Danubia Alapfokú Művészeti Iskola elnevezése és jelképe
          </h3>
          <p class="text-justify text-base">
            A danubia szó a Duna latin Danubius nevéből származik, köznapi jelentésében keskeny vászonkötésű pamutból szőtt szalagot értünk rajta. A választás azért esett a latin eredetű elnevezésre, mert e név egy egységes szellemiségű, klasszikus gyökerű, de a népi kultúrát is magába foglaló művészetszemléletre utal. A magyar gondolkodásban és művészetben a Dunának, mint országokat és a Duna mentén élő népek évezredes hagyományait összekötő folyamnak szimbolikus jelentése általánosan ismert. Miként a Duna összeköti a különböző kultúrákat, s a danubia szalag a ruha részeit egésszé egyesíti, akként  a Danubia AMI jelképesen egybefogja a többnemzetiségű településeken folyó művészeti képzést.
            A művészetek és oktatásuk egyenrangúságát és egységét – Oláh Gábor pécsi grafikusművész munkája által – a különböző művészeti ágak szimbólumainak a D betű iniciáléjába történt egybeszerkesztése fejezi ki. A kék és aranysárga alkalmazása Baja városának adja meg a tiszteletet.
          </p>


        </div>
        <div class="groupPic w-[50%] h-[50%]">

        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center w-full h-screen dark:bg-zinc-950 gap-10">
      <h3 class="text-3xl">A térség kulturális életében jelenleg fontos szerepet betöltő művészeti csoportjaink:</h3>
      <table class="border-[2px] border-zinc-900 w-10/12" cellspacing="0" cellpadding="5">
  <thead>
    <tr>
      <th>Esemény</th>
      <th>Helyszín(ek)</th>
      <th>Közreműködő csoportok</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jánoska-eresztés</td>
      <td>Baja</td>
      <td>Danubia néptánccsoportok (Baja, Szakmár, Nagybaracska, Dunafalva, Hercegszántó)</td>
    </tr>
    <tr>
      <td>Halászléfőző fesztivál</td>
      <td>Baja</td>
      <td>Bátmonostori Danubia Tamburazenekar, Danubia gyermek-tamburazenekar</td>
    </tr>
    <tr>
      <td>Folklórfesztivál</td>
      <td>Baja, Kalocsa</td>
      <td>Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó), Bátmonostori Danubia Tamburazenekar</td>
    </tr>
    <tr>
      <td>Falunapok</td>
      <td>Szeremle, Dunafalva, Szakmár, Vaskút, Nagybaracska, Bácsbokod, Hercegszántó, Bátya, Sükösd, Felsőszentiván</td>
      <td>Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár), Danubia Tamburazenekar</td>
    </tr>
    <tr>
      <td>Szüreti felvonulások és bálak</td>
      <td>Szeremle, Dunafalva, Szakmár, Vaskút, Nagybaracska, Bácsbokod, Hercegszántó, Bátya, Sükösd</td>
      <td>Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
    </tr>
    <tr>
      <td>Rác-pünkösd</td>
      <td>Dusnok</td>
      <td>Kraul Antal Ifjúsági Fúvósegyesület, Bátyai Ifjúsági Fúvószenekar</td>
    </tr>
    <tr>
      <td>Ifjú Zenebarátok Találkozója</td>
      <td>Madaras</td>
      <td>Forgó Zoltán Ifj. Fúvószenekar, Felsőszentiváni Kísérleti Színpad</td>
    </tr>
    <tr>
      <td>Karácsonyi hangversenyek</td>
      <td>Bácsbokod, Bátya</td>
      <td>Bajai Táncsport Egyesület csoportjai, Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
    </tr>
    <tr>
      <td>Vízkereszti koncert</td>
      <td>Bátya</td>
      <td>Kraul Antal Ifjúsági Fúvósegyesület</td>
    </tr>
    <tr>
      <td>Temetések</td>
      <td>Bácsbokod, Bátya</td>
      <td>Bátmonostori Danubia Tamburazenekar, Dusnoki Danubia Tambura együttes</td>
    </tr>
    <tr>
      <td>Prélók</td>
      <td>Dusnok, Hercegszántó, Bátya</td>
      <td>Danubiás zeneiskolások: gitárosok, zongoristák, tamburások</td>
    </tr>
    <tr>
      <td>Március 15-i megemlékezés</td>
      <td>Minden településen</td>
      <td>Bátyai Ifjúsági Fúvószenekar, Kraul Antal Ifjúsági Fúvósegyesület</td>
    </tr>
    <tr>
      <td>Gyermektáncszín találkozó</td>
      <td>Nagybaracska</td>
      <td>Forgó Zoltán Ifj. Fúvószenekar, Bátyai Ifjúsági Fúvószenekar</td>
    </tr>
    <tr>
      <td>Húsvéti templomi koncert</td>
      <td>Bácsbokod, Bátya</td>
      <td>Dusnoki Danubia Tambura együttes, Hercegszántói Veseli Santovcani néptáncegyüttes</td>
    </tr>
    <tr>
      <td>Pünkösdi koncert</td>
      <td>Kalocsa, Bátya</td>
      <td>Danubia néptánccsoportok (Baja, Nagybaracska, Dunafalva, Hercegszántó, Szakmár)</td>
    </tr>
    <tr>
      <td>Társastánc Találkozó</td>
      <td>Baja</td>
      <td>Bátyai Ifjúsági Fúvószenekar, Kraul Antal Ifjúsági Fúvósegyesület, Forgó Zoltán Ifj. Fúvószenekar</td>
    </tr>
  </tbody>
      </table>
    </div>

    <div class="flex flex-col justify-center items-center w-full h-screen dark:bg-zinc-950 text-justify">
      <div class="flex flex-col justify-center items-center w-1/3 h-full gap-10">
        <h3 class="text-3xl">Iskolatörténet</h3>
        <p>
          Intézményünk az országban tizenhatodik magánfenntartású zeneiskolaként, bajai fenntartói és igazgatási székhellyel a Baja környéki kistelepüléseken 1994 szeptemberében kezdte meg működését.
            A közoktatási feladatokat ellátó Magánzeneiskola azon vidéki tanulók részére jött létre, akik addig földrajzi, illetve szociális helyzetükből adódóan nem vehettek részt alapfokú zeneoktatásban.
            1996-tól az iskola megkezdte a nem zenei (képző- és iparművészeti, színművészeti és táncművészeti) tárgyak  oktatását.
            A 2000/2001. tanévtől Danubia Alapfokú Művészeti Iskola néven Baján is megindult az alapfokú művészetoktatás.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.groupPic{
  background-image: url("../../assets/pics/groupPic.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
tr, td{
  @apply border-[1px]
}
</style>
