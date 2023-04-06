<script>
  import Audio from "./Main_Components/Audio.svelte";
  import Navigation from "./Main_Components/Layout/Navigation.svelte";
  import Box from "./Main_Components/Layout/Box.svelte";
  import "./App.css";
  import Image from "./Main_Components/Image.svelte";
  import Box60 from "./Main_Components/Layout/Box60.svelte";
  import Box100 from "./Main_Components/Layout/Box100.svelte";
  import BoxScreen from "./Main_Components/Layout/BoxScreen.svelte";
  import Swiper from "./Main_Components/Swiper.svelte";
  import Image60 from "./Componenten/Images/Image60.svelte";
  let y;
</script>

<svelte:window bind:scrollY={y} />

<main class="relative">
  <Navigation />
  <div class="w-screen h-screen relative">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-3/5 h-auto"
    >
      <h3 class="text-center text-wit font-libre text-md lg:text-xl mb-3">
        <span class="font-semibold">ONDERZOEKSREEKS</span> DE VEEFABRIEKEN
      </h3>
      <h2
        class="text-center text-wit font-arnhem text-2xl lg:text-4xl leading-tight overflow-y-hidden"
      >
        De boer die niet vergroot, gaat dood. Waarom megastallen het Vlaamse
        platteland veroveren
      </h2>
    </div>

    <span
      class="absolute bottom-[75px] left-1/2 transform -translate-x-1/2 text-wit"
      style="opacity: {1 - Math.max(0, y / 300)}"
    >
      <div class="scroll-icon-container">
        <div class="field">
          <div class="field-text">scroll</div>
          <div class="mouse" />
        </div>
      </div>
    </span>
    <img
      src="https://static.standaard.be/Assets/Images_Upload/2020/11/27/Chicken_Valley_03-jk_aangepast.jpg"
      alt=""
      class="object-cover w-full h-full"
    />
  </div>
  <Box>
    <p class="font-semibold text-xl pb-3">
      Landbouwbeurzen en opendeurdagen zijn de uitgelezen plekken om
      geïnteresseerden te overtuigen in de grootschalige kippenteelt te gaan.
      Coppens organiseerde opendeurdagen bij verschillende Vlaamse
      kippenkwekers, onder wie ook Daniël Saels en An Aernouts.
    </p>
    <link
      rel="stylesheet"
      href="https://markup.standaard.be/extra/static/202302_codegenerator_joppe/Hoofdje1.css"
    />
    <div class="hoofdjesBlokEen">
      <div class="images">
        <img
          src="https://static.standaard.be/Assets/Images_Upload/2020/11/27/logo-veefabrieken.png"
          id="image1"
        />
      </div>

      <div class="tekst">
        <h3>
          Ine Renson
          <p>Zaterdag 28 november 2020</p>
        </h3>
      </div>
    </div>

    <p>
      Landbouwbeurzen en opendeurdagen zijn de uitgelezen plekken om
      geïnteresseerden te overtuigen in de grootschalige kippenteelt te gaan.
      Coppens organiseerde opendeurdagen bij verschillende Vlaamse
      kippenkwekers, onder wie ook Daniël Saels en An Aernouts. Die worden
      steevast ingeleid door een symposium, waarbij dezelfde belanghebbende
      komen praten: een bankier over het verdienmodel, iemand van het
      adviesbureau DLV over subsidies of de stikstofwetgeving, een directeur van
      Coppens zelf. Eén keer, bij Patrick Aernouts uit Wuustwezel, stond zelfs
      de toenmalige minister van Financiën Johan Van Overtveldt (N-VA) op het
    </p>
  </Box>

  <BoxScreen>
    <video
      class="w-full h-full object-cover"
      poster="https://static.standaard.be/Assets/Images_Upload/2020/11/27/zwijntjes.jpg"
      autoplay
      loop
      muted
    >
      <source
        src="https://markup.standaard.be/extra/assets/extra/dslive/2020/scrolly/ine-stallen/media/_zwijntjes.mp4"
        type="video/mp4"
      />
    </video>
  </BoxScreen>

  <Box>
    <p>
      zegt hij nog steeds: “Ik zal het voor je regelen”.’ Coppens stond garant
      bij de bank. In ruil sloot Aernouts met hen een contract af om vijf jaar
      voeder af te nemen.
      <Audio
        url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      >
        Prijsoffertes, de lening bij de bank. Als ik niet weet hoe ik iets moet
        aanpakken,
      </Audio>
      Die bankgarantie was nodig, want Aernouts had als beginnende landbouwster weinig
      om voor te leggen. In drie jaar tijd had ze twee keer een miljoen euro nodig
      om haar bedrijf uit te bouwen tot de omvang die het nu heeft. <br /><br />
      Als ik niet weet hoe ik iets moet aanpakken, zegt hij nog steeds: “Ik zal het
      voor je regelen”.’ Coppens stond garant bij de bank. In ruil sloot Aernouts
      met hen een contract af om vijf jaar voeder af te nemen. Die bankgarantie was
      nodig, want Aernouts had als beginnende landbouwster weinig om voor te leggen.
      In drie jaar tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit
      te bouwen tot de omvang die het nu heeft. <br /><br />
      Als ik niet weet hoe ik iets moet aanpakken, zegt hij nog steeds: “Ik zal het
      voor je regelen”.’ Coppens stond garant bij de bank. In ruil sloot Aernouts
      met hen een contract af om vijf jaar voeder af te nemen. Die bankgarantie was
      nodig, want Aernouts had als beginnende landbouwster weinig om voor te leggen.
      In drie jaar tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit
      te bouwen tot de omvang die het nu heeft.
    </p>
  </Box>

  <Box60>
    <div class="flex justify-center gap-1">
      <div class="w-1/2">
        <Image
          url="https://static01.nyt.com/images/2022/09/01/us/politics/congress-stock-trading-committees-6/congress-stock-trading-committees-6-master1050.jpg"
          caption="Representative Abigail Spanberger, Democrat of Virginia, is spearheading a bill to tighten trading restrictions for members of Congress"
        />
      </div>
      <div class="w-1/2">
        <Image
          url="https://static01.nyt.com/images/2022/09/01/us/politics/congress-stock-trading-committees-sub5/congress-stock-trading-committees-sub5-master1050.jpg"
          caption="Representative Chip Roy, Republican of Texas, is one of 67 co-sponsors of the bill."
        />
      </div>
    </div>
  </Box60>
  <Box>
    <h2 class="font-arnhem font-bold text-lg mt-6 mb-3">
      Alles in handen van enkele families
    </h2>
    <p>
      prijsoffertes, de lening bij de bank. Als ik niet weet hoe ik iets moet
      aanpakken, zegt hij nog steeds: “Ik zal het voor je regelen”.’ Coppens
      stond garant bij de bank. In ruil sloot Aernouts met hen een contract af
      om vijf jaar voeder af te nemen. Die bankgarantie was nodig, want Aernouts
      had als beginnende landbouwster weinig om voor te leggen. In drie jaar
      tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit te bouwen
      tot de omvang die het nu heeft. prijsoffertes, de lening bij de bank.
      <br /><br />
      Als ik niet weet hoe ik iets moet aanpakken, zegt hij nog steeds: “Ik zal het
      voor je regelen”.’ Coppens stond garant bij de bank. In ruil sloot Aernouts
      met hen een contract af om vijf jaar voeder af te nemen. Die bankgarantie was
      nodig, want Aernouts had als beginnende landbouwster weinig om voor te leggen.
      In drie jaar tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit
      te bouwen tot de omvang die het nu heeft.
    </p>
  </Box>

  <Image60
    url="https://static.standaard.be/Assets/Images_Upload/2020/11/26/wuustwezel2-jk.jpg"
    caption="Foto: Jimmy Kets"
  />

  <Box>
    <h2 class="font-arnhem font-bold text-lg mt-6 mb-3">
      Alles in handen van enkele families
    </h2>
    <p>
      Landbouwbeurzen en opendeurdagen zijn de uitgelezen plekken om
      geïnteresseerden te overtuigen in de grootschalige kippenteelt te gaan.
      Coppens organiseerde opendeurdagen bij verschillende Vlaamse
      kippenkwekers, onder wie ook Daniël Saels en An Aernouts. Die worden
      steevast ingeleid door een symposium, waarbij dezelfde belanghebbende
      komen praten: een bankier over het verdienmodel, iemand van het
      adviesbureau DLV over subsidies of de stikstofwetgeving, een directeur van
      Coppens zelf. Eén keer, bij Patrick Aernouts uit Wuustwezel, stond zelfs
      de toenmalige minister van Financiën Johan Van Overtveldt (N-VA) op het
    </p>
  </Box>

  <Box>
    <iframe
      title="Navo-landen - overzichtspagina"
      aria-label="Map"
      id="datawrapper-chart-qLOX3"
      src="https://datawrapper.dwcdn.net/qLOX3/1/"
      scrolling="no"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"
      height="570"
    />
  </Box>
  <Box>
    <p>
      programma – al is die uiteindelijk niet opgedraafd. Landbouwers pakken
      graag uit met hun nieuwe stal, maar ze doen het ook als geste naar het
      voederbedrijf. ‘We hebben een mooi bedrijf’, zegt Linda Dierckx, die met
      haar man Dirk Tuytelaers een kippenstal uitbaat in Ravels. ‘Maar ooit ging
      het minder goed. Toen we in de shit zaten, heeft Coppens ons geld
      voorgeschoten.’ Voor An Aernouts is Patrick Van den Hurk, de commerciële
      manager van Coppens, een echte vertrouwenspersoon. ‘Hij heeft zelf een
      grote stal in Noord-Brabant. Toen ik van de landbouwschool kwam, heb ik
      vier jaar stagegelopen in zijn bedrijf. Zonder Patrick stond ik niet waar
      ik nu sta. Hij heeft me met alles geholpen: de vergunningen, de
    </p>
  </Box>

  <Box>
    <Swiper />
  </Box>
  <Box
    ><p>
      prijsoffertes, de lening bij de bank. Als ik niet weet hoe ik iets moet
      aanpakken, zegt hij nog steeds: “Ik zal het voor je regelen”.’ Coppens
      stond garant bij de bank. In ruil sloot Aernouts met hen een contract af
      om vijf jaar voeder af te nemen. Die bankgarantie was nodig, want Aernouts
      had als beginnende landbouwster weinig om voor te leggen. In drie jaar
      tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit te bouwen
      tot de omvang die het nu heeft.
    </p>
  </Box>

  <Box100>
    <video
      class="w-full h-full object-cover"
      poster="https://static.standaard.be/Assets/Images_Upload/2020/11/27/zwijntjes.jpg"
      autoplay
      loop
      muted
    >
      <source
        src="https://markup.standaard.be/extra/assets/extra/dslive/2020/scrolly/ine-stallen/media/_beck.mp4"
        type="video/mp4"
      />
    </video>
  </Box100>
  <Box>
    <p>
      prijsoffertes, de lening bij de bank. Als ik niet weet hoe ik iets moet
      aanpakken, zegt hij nog steeds: “Ik zal het voor je regelen”.’ Coppens
      stond garant bij de bank. In ruil sloot Aernouts met hen een contract af
      om vijf jaar voeder af te nemen. Die bankgarantie was nodig, want Aernouts
      had als beginnende landbouwster weinig om voor te leggen. In drie jaar
      tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit te bouwen
      tot de omvang die het nu heeft.
    </p>
  </Box>

  <Box>
    <div class="flex justify-center gap-1">
      <div class="w-1/2">
        <Image
          url="https://static.standaard.be/Assets/Images_Upload/2020/12/05/fa25907c-363c-11eb-89ac-9ecbc5931203.jpg?width=768&format=jpg"
          caption=""
        />
      </div>
      <div class="w-1/2">
        <Image
          url="https://static.standaard.be/Assets/Images_Upload/2023/03/10/9c03eed9-2173-4a08-aa06-16f8a1d8492f.jpg?maxheight=416&maxwidth=568&scale=both"
          caption=""
        />
      </div>
    </div>
  </Box>
  <Box>
    <p>
      prijsoffertes, de lening bij de bank. Als ik niet weet hoe ik iets moet
      aanpakken, zegt hij nog steeds: “Ik zal het voor je regelen”.’ Coppens
      stond garant bij de bank. In ruil sloot Aernouts met hen een contract af
      om vijf jaar voeder af te nemen. Die bankgarantie was nodig, want Aernouts
      had als beginnende landbouwster weinig om voor te leggen. In drie jaar
      tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit te bouwen
      tot de omvang die het nu heeft.
      <br /><br />
      Als ik niet weet hoe ik iets moet aanpakken, zegt hij nog steeds: “Ik zal het
      voor je regelen”.’ Coppens stond garant bij de bank. In ruil sloot Aernouts
      met hen een contract af om vijf jaar voeder af te nemen. Die bankgarantie was
      nodig, want Aernouts had als beginnende landbouwster weinig om voor te leggen.
      In drie jaar tijd had ze twee keer een miljoen euro nodig om haar bedrijf uit
      te bouwen tot de omvang die het nu heeft.
    </p>
  </Box>

  <Box>
    <Image
      url="https://static.standaard.be/Assets/Images_Upload/2020/12/05/fa25907c-363c-11eb-89ac-9ecbc5931203.jpg?width=768&format=jpg"
      caption="Foto: Jimmy Kets"
    />
  </Box>

  <Box>
    <!--
      Inzet 
      Credits 
-->
    <link
      rel="stylesheet"
      href="https://markup.standaard.be/extra/static/202302_codegenerator_joppe/Inzet.css"
    />
    <div class="inzet">
      <h2 class="titel">Credits</h2>
      <div class="editor">
        <p>
          <strong style="background-color: rgb(254, 254, 254);">Tekst</strong
          ><span style="background-color: rgb(254, 254, 254);"
            >: Ine Renson</span
          >
        </p>
        <p>
          <strong style="background-color: rgb(254, 254, 254);"
            >Foto &amp; video</strong
          ><span style="background-color: rgb(254, 254, 254);"
            >: Jimmy Kets</span
          >
        </p>
        <p>
          <strong style="background-color: rgb(254, 254, 254);"
            >Design &amp; development</strong
          ><span style="background-color: rgb(254, 254, 254);"
            >: Tina Boeykens &amp; Andy Stevens</span
          >
        </p>
        <p>
          <strong style="background-color: rgb(254, 254, 254);">Bronnen</strong
          ><span style="background-color: rgb(254, 254, 254);"
            >: Statbel, Geopunt</span
          >
        </p>
        <p>
          <strong style="background-color: rgb(254, 254, 254);"
            >Met dank aan</strong
          ><span style="background-color: rgb(254, 254, 254);">:&nbsp;</span><a
            href="https://www.openstreetmap.org/"
            rel="noopener noreferrer"
            target="_blank"
            style="background-color: rgb(254, 254, 254); color: rgb(0, 0, 0);"
            >OpenStreetMap</a
          ><span style="background-color: rgb(254, 254, 254);">,&nbsp;</span><a
            href="https://www.freepik.com/createvil"
            rel="noopener noreferrer"
            target="_blank"
            style="background-color: rgb(254, 254, 254); color: rgb(0, 0, 0);"
            >Createvil/Freepik</a
          >
        </p>
      </div>
    </div>
  </Box>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    h2 {
      @apply font-arnhem;
    }
    h3 {
      @apply font-libre;
    }
    p {
      @apply font-arnhem;
      @apply font-light;
      @apply text-lg;
    }
    figcaption {
      @apply text-sm;
      @apply ml-2;
      @apply lg:ml-0;
      @apply mt-2;
      @apply text-grijs;
    }
  }
</style>
