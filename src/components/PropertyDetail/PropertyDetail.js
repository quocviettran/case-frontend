import React, { Component } from "react";
import "./PropertyDetail.css";
import { Grid, Header, Image, Button, Transition } from "semantic-ui-react";

export default class propertyDetail extends Component {
  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            height: "100%",
            background: "#023640"
          }}
        >
          <Image
            id="headerImg"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g"
          />
          <Header className="item centered headerInfo">
            <h1>Myrveien 16B</h1>
            <h4>ROTNES, NITTEDAL</h4>
            <h5>På denne siden finner du komplett informasjon om eiendommen</h5>
          </Header>
          <Grid
            columns={3}
            stackable
            textAlign="center"
            style={{
              height: "100%",
              width: "100%",
              margin: "0"
            }}
          >
            <Grid.Row>
              <Grid.Column
                style={{
                  background: "#05A0BC"
                }}
              >
                <h4>ADRESSE Myrveien 16B</h4>
                <h4>PRISANTYDNING 9 490 000 kr</h4>
                <h4>OMKOSTNINGER 63 722 kr</h4>
                <h4>TOTALPRIS * 9 553 722 kr</h4>
                <h4>BOLIGTYPE Enebolig</h4>
                <h4>EIEFORM Eiet</h4>
              </Grid.Column>
              <Grid.Column
                style={{
                  background: "#05A0BC"
                }}
              >
                <h4>PRIMÆRROM 191 m²</h4>
                <h4>BRUKSAREAL 196 m²</h4>
                <h4>SEKUNDÆRROM 5 m²</h4>
                <h4>SOVEROM 4</h4>
                <h4>ROM 6</h4>
                <h4>BRUTTOAREAL 216 m²</h4>
                <h4>TOMTEAREAL 545.2 m² (eiet)</h4>
                <h4>BYGGEÅR 2019</h4>
                <h4>ETASJE 2</h4>
              </Grid.Column>
              <Grid.Column
                style={{
                  background: "#FFFFFF"
                }}
              >
                <h2>VISNING</h2>
                <h2>torsdag, 11 april 17:30-18:30</h2>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <h4>Informasjon om eiendom</h4>
              <Transition visible={!visible} animation="scale" duration={200}>
                <div id="fullInfoText">
                  Splitter ny, lekker enebolig på to plan med terrasse og
                  dobbelgarasje. Høy kvalitet i alle ledd. Perfekt beliggenhet.
                  Myrveien 16 B er en splitter ny enebolig over to plan med
                  gjennomgående høy kvalitet. Her kan du flytte rett inn i en
                  moderne bolig med fokus på komfort og det lille ekstra.
                  Beliggenheten er perfekt med få min gange til både busstopp og
                  togstasjon. Området er meget barnevennlig med kort vei til
                  nydelig turterreng. Ved stuen er det terrasse og tomten er
                  klargjort for videre opparbeiding. Det er parkering i
                  dobbelgarasje. Stue og kjøkken er et herlig, sosialt rom med
                  mye lys, peisovn og flere soner. Kjøkkenet er topp moderne med
                  integrerte hvitevarer og kjøkkenøy. I tillegg er det luftig
                  loftstue. Boligen har to delikate bad, vaskerom med egen
                  inngang og gjestetoalett. Det er fire soverom, der
                  hovedsoverommet har privat bad og garderoberom. Garderoberom
                  finnes også ved den romslige entreen Standard Entré: Entreen
                  er av god størrelse og har gulvfliser i grått med varme.
                  Rommet er tilknyttet et smart garderoberom, som igjen har
                  adkomst til vaskerommet hvor det også er egen inngang.
                  Gjestetoalett ligger også ved entreen. Det er bod under
                  trappen og dobbel glassdør inn til stuen. Veggene er slette,
                  med listfri overgang til himling, og malt i tidsriktig, mørk
                  farge, noe som harmonerer med øvrige rom i boligen. Kjøkken:
                  Kjøkkenet er levert fra Epoq og er topp moderne. Det er
                  designet med tanke på å skape luft og god plass. Endeveggen
                  består av høyskap med hvite, slette fronter med freste
                  håndtak. Her er det kjøleskap, fryser, stekovn og kombi ovn
                  (micro og komfyr) med varmeskuff under. Kjøkkenøy og rekke med
                  bekeskap i sort skaper spenning i rommet. Kjøkkenøyen har
                  spiseplass og benkeplaten er lys. Det er induksjonstopp med
                  benkeventilator. Langs veggen er det underlimt sort
                  oppvaskkum, og kjøkkenet har integrerte hvitevarer fra Bosch
                  og Whirpool. Stue: Stue og kjøkken ligger i åpen løsning og
                  danner et sosialt rom med flere soner. Vinkelløsning sørger
                  for at stuedel og kjøkken oppleves delvis adskilt. Rommet har
                  en rekke store vinduer og dobbelfløyet terrassedør som gir
                  nydelig lys. De tidsriktige, mørke veggene skaper en fin
                  kontrast til det lysere gulvet. Det er downlights i himling,
                  og på endeveggen er det montert peisovn med stålpipe.
                  Loftstue: Loftstuen er et herlig, luftig rom med stor
                  vindusflate som følger himlingen. Her kan du nyte den frie
                  følelsen og utsikt over nærområdet. Rommet har downlights og
                  ekstra takhøyde. Stuen bidrar til god fleksibilitet for
                  familien og det er plass til ønsket møblement.
                  Bad/wc/vaskerom: Boligen har to lekre bad, gjestetoalett og
                  separat vaskerom. Begge badene ligger i andre etasje, og badet
                  som er tilknyttet hovedsoverommet har lyse gulv- og
                  veggfliser. Det er stor dusjnisje med mørke heksagonfliser,
                  glassvegger og to regnfallsdusjer. Badet har gulvvarme,
                  downlights og vegghengt toalett. Innredningen har sorte
                  skuffefronter, heldekkende dobbel servant og speil med
                  integrert belysning. Bad 2: Det andre badet har sandfargede
                  storformatfliser på gulv og vegger, gulvvarme og vegghengt
                  toalett. Det er dusjhjørne med glassdører og regnfallsdusj.
                  For ekstra velvære er det deilig badekar. Innredningen har
                  lyse skuffefronter, heldekkende dobbel servant og speil med
                  integrert belysning. Gjestetoalettet ligger ved entreen i
                  første etasje. Vaskerom: Vaskerommet har egen inngang og er
                  tilknyttet entreen via garderoberommet. Rommet har gulvfliser
                  og lysmalte veggflater. Soverom og garderobe: Boligen har fire
                  soverom i andre etasje. Soverommene har downlights og
                  hovedsoverommet er av ekstra god størrelse. Hovedsoverommet
                  har privat bad og er tilknyttet garderoberom. I tillegg er det
                  garderoberom ved entreen og lagringsplass i bod under trappen.
                  Teknisk: Boligen har høytrykkslaminat på gulv, trapp fra
                  Fagtrapp, dører fra Swedoor og vinduer fra Uldal.
                  Ventilasjonsanlegg fra Flexit. Spotter i tak fra SG. Innhold
                  Planløsning 1. etasje: Entré, garderoberom, vaskerom,
                  gjestetoalett, bod, stue/kjøkken og teknisk rom. 2. etasje:
                  Loftstue, 2 bad, 4 soverom og garderoberom.
                  Kvaliteter/oppgraderinger/teknisk - Lekker enebolig over to
                  plan. - Boligen ligger på et lite høydedrag. - Splitter nytt –
                  høy kvalitet. - Tidsriktige fargevalg. - Perfekt beliggenhet.
                  - Dobbeltgarasje. - Terrasse og klargjort tomt. - Solrikt og
                  skjermet. - Entré med garderoberom. - Topp moderne kjøkken. -
                  Integrerte hvitevarer. - Åpen, sosial stue. - Luftig loftstue.
                  - To delikate bad. - Vaskerom med egen inngang. -
                  Gjestetoalett ved entreen. - Fire soverom, ett med bad. -
                  Garderoberom ved et soverom. - Utstrakt bruk av downlights. -
                  Automatsikringer. Beskrivelser Parkering Det er parkering i
                  frittstående dobbel garasje på 38 kvm BRA. Diverse Boligen er
                  nyoppført og selges slik den fremvises på visning. Det vil
                  ikke bli vasket ytterligere eller gjort mer arbeid på
                  eiendommen før overtakelse. Det kan forekomme hakk, riper,
                  merker, synelige spiker, osv. på vegg, vindu, dører, kjøkken,
                  trapp, fliser etc. Dette er ikke og anse som reklamasjon og
                  blir ikke utbedret. I nye bygg vil det normalt oppstå
                  svinnriss, sprekker i tapet, maling mv. ved skjøter og
                  sammenføyninger, dels på grunn av uttørking av materialer. Det
                  påpekes spesielt at sprekker i materialoverganger og mellom
                  tak og vegg og i hjørner ikke kan forlanges utbedret, så lenge
                  disse ikke innebærer avvik fra god håndverksmessig standard.
                  Da laminatgulvet er lagt med over 6 meters lengde uten å legge
                  inn ekspansjonsfug/ «skjøt», kan det forekomme knirk/ mindre
                  bevegelser i gulvet. Utdrag tatt fra beskrivelse av
                  gulvleverandør. Fra 01.01.2019 stilles det krav til garanti
                  fra utbygger, § 2-11 Garanti for oppfylling av avtalen. "Ved
                  sal av ny eigarbustad eller fritidsbustad som vert seld innan
                  seks månader etter fullføringa av bustaden, skal seljaren
                  stille garanti i samsvar med bustadoppføringslova § 12,
                  såframt seljaren har ledd i næringsverksemd og kjøparen er
                  forbrukar." Dette stilles ved inngåelse av kontrakt. Da det er
                  nybygg foreligger det ikke takst/tilstandsrapport på
                  eiendommen, kun oppmåling gjort av takstmann Aleksander Olsen
                  datert 04.04.2019. Det gjøres oppmerksom på at vedlagte 3D
                  plantegninger ikke stemmer hva gjelder faktisk innredning og
                  møblering etc. Den er ikke målbar, samt at avvik og feil kan
                  forekomme. Oppgitte arealer er hentet fra vedlagte takst og
                  megler har ikke kontrollmålt boligen. Takst og tilstand
                  Takstdato: 16/01/2019 Områdebeskrivelser Beliggenhet
                  Eiendommen ligger i et familievennlig og etablert boligområde
                  på Rotnes i Nittedal kommune. Beliggenheten er perfekt, ca.
                  500 meter fra Nittedal stasjon som er tilknyttet Gjøvikbanen.
                  Herfra bruker toget ca. 30 min til Oslo. Nærmeste
                  bussholdeplass er Betel som ligger ca. 190 meter fra boligen.
                  Fra boligen er det 1 km til Sørli barneskole og 1,2 km til
                  Nittedal ungdomsskole Det finnes videregående skole på
                  Bjertnes, samt barnehager på Rotnes, Kruttverket og Sørli. Av
                  fritidsaktiviteter er det både fotballbane, lekeplass,
                  idrettshall, svømmehall, badevann, hesteridning og golfbane i
                  nærområdet. Rotnes er et «tur-mekka» for den
                  friluftsinteresserte. Med store uberørte naturområder og
                  skiløyper praktisk talt utenfor døra, er det lett å skjønne
                  hvorfor. Fra boligen er det ca. 1,2 km til Sørlitangen, som er
                  et utmerket utgangspunkt for turer i marka. Herfra går det
                  løype mot Varingskollen og mot Ørfiske. Det er populær
                  badeplass ved Høldippeldammen litt nord for Nittedal stasjon,
                  samt ved Ørfiske. Varingskollen Alpinsenter ligger noen
                  minutters kjøretur fra eiendommen. Senteret har et utmerket
                  familietilbud med varierte bakker for alle ferdighetsnivåer,
                  samt to serveringssteder med varmestue. Golf kan du spille på
                  Hauer golfbane som ligger vakkert til i sydhellingen mot
                  Hellerudsletta. Ved Nittedal stasjon er det dagligvarebutikk
                  med post i butikk, samt hyggelige Nittedal landhandleri som
                  byr på gavebutikk og kafé. Joker Rotnes og Rema 1000 Nittedal
                  ligger også i nærområdet. Ønsker du ytterligere servicetilbud
                  er det ca. 2,9 km til Mosenteret med et variert utvalg
                  (senteret er under utbygging og vil snart by på et riktig
                  utvalg), samt kommunens nye kulturhus. Lillestrøm, Strømmen og
                  Oslo ligger også godt inne rekkevidde med bil eller offentlig
                  kommunikasjon. Adkomst Det vil bli skiltet med visningsskilt
                  fra DNB Eiendom under annonserte visninger. Skolekrets Ta
                  kontakt med skolekontoret i Nittedal kommune, tlf. 67059300
                  for nærmere informasjon. Tomteforhold Fra stuen er det utgang
                  til markterrasse på 34 kvm. Terrassen strekker seg langs hele
                  langveggen og kan fint møbleres i flere soner. Uteplassen har
                  tredekke og i den ene enden er det rekkverk. Tomten er ellers
                  klargjort for videre opparbeiding utfra egne ønsker og behov.
                  545.2 kvm Energi Oppvarming Boligen er elektrisk oppvarmet med
                  diverse panelovner og gulvvarme på våtrom og i entré, supplert
                  med vedfyring i stue. Økonomi Info kommunale avgifter
                  Kommunale gebyrer utgjør foreløpig ca. kr 0,- pr. år da dette
                  er nybygg. I gebyret inngår vann, avløp, renovasjon samt
                  pipe/tilsyn. Kommunen vil beregne sum for kommunale avgifter.
                  Det er vannmåler. Info Eiendomsskatt Eiendomsskatt beregnes
                  fra neste år da det er nybygg. Tilbud på lånefinansiering Som
                  et av landets største finanskonsern tilbyr DNB Bank ASA alle
                  typer banktjenester til konkurransedyktige priser. Banken kan
                  gi deg lånetilbud til finansiering av eiendommen. Våre meglere
                  kan opprette kontakt mellom deg og en kunderådgiver i banken
                  og som kunde hos oss lover banken en hurtig behandling av din
                  låneforespørsel. Offentlige forhold Konsesjonsplikt: Nei Bo-
                  og driveplikt: Nei Odelsrett: Nei Ferdigattest/Brukstillatelse
                  Det er sendt inn søknad om ferdigattest og denne vil foreligge
                  før overtakelse. Vei, vann og avløp Eiendommen er tilkoblet
                  offentlig vann og avløp. Regulerings- og arealplaner Boligen
                  er regulert for boligbebyggelse-frittliggende småhusbebyggelse
                  etter reguleringsplan, Detaljreguleringsplan for Hulderveien.
                  Grunnboksdato: 27/03/2019 Adgang til utleie Det er ikke kjent
                  at det foreligger regler som er til hinder for at eiendommen
                  leies ut. Tinglyste heftelser og rettigheter På eiendommen er
                  det tinglyst følgende servitutter/rettigheter som følger
                  eiendommens matrikkel ved overskjøting til ny hjemmelshaver:
                  2019/161487-1/200 07.02.2019 21:00 REGISTRERING AV GRUNN Denne
                  matrikkelenhet utskilt fra: KNR: 0233 GNR: 14 BNR: 835
                  Servitutter: 2019/161501-1/200 07.02.2019 21:00 BESTEMMELSE OM
                  ADKOMSTRETT Rettighet hefter i: KNR: 0233 GNR: 14 BNR: 835 KAN
                  IKKE SLETTES UTEN SAMTYKKE FRA: NITTEDAL KOMMUNE ORG.NR: 971
                  643 870 Kontraktgrunnlag Overtakelse Overtakelse etter nærmere
                  avtale. Lovanvendelse Eiendommen selges "som den er", jf.
                  avhendingsloven (avhl) § 3-9. Boligen overdras således slik
                  den fremstår ved besiktigelse med åpenbare feil og mangler.
                  Salgsoppgaven er basert på selgers opplysninger og meglers
                  egne undersøkelser. Det oppfordres til å sette seg godt inn i
                  salgsoppgaven og eventuelle vedlegg til denne. Videre
                  oppfordres alle interessenter til å sette seg inn i
                  egenerklæringen fra selger som er inntatt i salgsoppgaven samt
                  til å undersøke eiendommen nøye, gjerne sammen med fagkyndig
                  person før bud inngis. Boligen har mangel i følgende tilfelle:
                  1) Når kjøper ikke har fått opplysninger om forhold ved
                  boligen som selger kjente eller måtte kjenne til, og som
                  kjøper hadde grunn til å regne med å få, jf. avhl § 3-7. Dette
                  gjelder likevel bare dersom man kan gå ut fra at det har
                  virket inn på avtalen at opplysningene ikke ble gitt. 2) Når
                  selger har gitt uriktige opplysninger om boligen, jf. avhl §
                  3-8. Det samme gjelder dersom boligen ikke er i samsvar med
                  opplysninger som er gitt i annonse, salgsprospekt eller ved
                  annen markedsføring på vegne av selgeren. Dette gjelder
                  likevel bare dersom man kan gå ut fra at opplysningene har
                  virket inn på avtalen, og ikke på en tydelig måte er blitt
                  rettet i tide. 3) Når boligen er i vesentlig dårligere stand
                  enn kjøper hadde grunn til å regne med ut fra kjøpesummen og
                  forholdene ellers, jf. avhl § 3-9. Ved tvil, så kontakt megler
                  for avklaring. Budgivning Bud kan legges inn på nettannonsen
                  på "gi bud knappen" eller via hjemmesiden. Ved elektronisk
                  budgivning så kan bud legges inn trygt og enkelt med bank-ID.
                  Megler kan også kontaktes for tilsendelse av budskjema og
                  budskjema finnes også i salgsoppgaven. All budgivning må
                  foregå ved skriftlighet. Ikke nøl med å ta kontakt dersom det
                  er behov for bistand for å gi bud. Omk. Kjøper beløp: 63722
                  Omk. Kjøper beskrivelse Dok.avg. til staten, 2.5% (av
                  tomteverdi kr. 2.500.000,-): kr 62.500,- Tinglysning av
                  hjemmelsdok.: kr 525,- Tinglysning av pantedok.: kr 525,-
                  Attestgebyr: kr 172,- Omkostninger: kr 63 722,-
                  Hvitvaskingsreglene I henhold til lov om hvitvasking og
                  terrorfinansiering har megler plikt til å gjennomføre
                  kontrolltiltak ovenfor kunder. Dette innebærer å bekrefte
                  kunders identitet på bakgrunn av fremvist gyldig legitimasjon.
                  Videre innebærer det å få bekreftet identiteten til eventuelle
                  reelle rettighetshavere, og å innhente opplysninger om
                  kundeforholdets formål og tilsiktede art. Dersom slike
                  kundetiltak ikke kan gjennomføres kan megler ikke etablerere
                  kundeforholdet eller utføre transaksjonen. Kjøper oppfordres
                  til å innbetale kjøpesummen som ikke kommer fra
                  låneinstitusjon, i en samlet innbetaling fra egen konto i
                  norsk bank. Dersom megler får mistanke om brudd på
                  hvitvaskingsreglementet i forbindelse med en eiendomshandel,
                  og han ikke klarer å få avkreftet denne mistanke, har han
                  plikt til å rapportere dette til Økokrim. Melding sendes
                  Økokrim uten at partene varsles. Megler kan i enkelte tilfelle
                  også ha plikt til å stanse gjennomføring av handelen.
                  Grunneiendom Kommune: NITTEDAL Kommunenummer: 0233
                  Matrikkelinformasjon Kommunenummer: 233 Gårdsnummer: 14
                  Bruksnummer: 1359 Vedlegg til salgsoppgave Last ned vedlegg
                  Bestill utskriftsvennlig salgsoppgave Bestill
                </div>
              </Transition>
              <Button
                content={visible ? "Show More" : "Hide"}
                onClick={this.toggleVisibility}
                class="ui blue button"
              />
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
