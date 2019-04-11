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
        <div id="bodyDiv">
          <Image
            id="headerImg"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260g"
          />
          <Grid id="headerGrid" stackable textAlign="center">
            <Grid.Row>
              <Header className="item centered" id="headerInfo">
                <h1>Myrveien 16B</h1>
                <h4>ROTNES, NITTEDAL</h4>
                <h5>
                  På denne siden finner du komplett informasjon om eiendommen
                </h5>
              </Header>
            </Grid.Row>
          </Grid>
          <Grid id="detailGrid" stackable textAlign="center">
            <Grid.Row columns={2}>
              <Grid.Column id="detailColumn">
                <Header id="maindetail">
                  <h4>ADRESSE: Myrveien 16B</h4>
                  <h4>PRISANTYDNING: 9 490 000 kr</h4>
                  <h4>OMKOSTNINGER: 63 722 kr</h4>
                  <h4>TOTALPRIS: *9 553 722 kr</h4>
                  <h4>BOLIGTYPE: Enebolig</h4>
                  <h4>EIEFORM: Eiet</h4>
                  <h4>PRIMÆRROM: 191 m²</h4>
                  <h4>BRUKSAREAL: 196 m²</h4>
                  <h4>SEKUNDÆRROM: 5 m²</h4>
                  <h4>SOVEROM: 4</h4>
                  <h4>ROM: 6</h4>
                  <h4>BRUTTOAREAL: 216 m²</h4>
                  <h4>TOMTEAREAL: 545.2 m² (eiet)</h4>
                  <h4>BYGGEÅR: 2019</h4>
                  <h4>ETASJE: 2</h4>
                </Header>
              </Grid.Column>
              <Grid.Column id="visningColumn">
                <header>
                  <h2 id="visningdetail">VISNING</h2>
                  <h2>torsdag, 11 april 17:30-18:30</h2>
                  <div id="map" />
                </header>
              </Grid.Column>
            </Grid.Row>
            <h2 id="infoomeiendomText">Informasjon om eiendom</h2>
            <Grid.Row>
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
                  spiseplass og benkeplaten er lys.
                </div>
              </Transition>
              <Button
                content={visible ? "Show More" : "Hide"}
                onClick={this.toggleVisibility}
                class="ui blue button"
                color="blue"
              />
            </Grid.Row>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
