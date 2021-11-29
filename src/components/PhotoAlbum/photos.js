import React from 'react';
import Select from 'react-select';
import './photos.css';
import Abarth from './Cars/abarth.jpg';
import Alfa from './Cars/ALFA ROMEO 2.0 jtdm.jpg';
import Astra from './Cars/astra crvena popravljen zid.jpg';
import AudiPop from './Cars/AUDI 1.8T.jpg';
import AudiA1red from './Cars/AUDI A1 CRVENI.jpg';
import AudiA1 from './Cars/AUDI a1.jpg';
import AudiA3 from './Cars/AUDI a3 mapa.jpg';
import AudiA4black from './Cars/AUDI A4 CRNI.jpg';
import AudiA4blue from './Cars/audi A4 plavi.jpg';
import AudiB85 from './Cars/AUDI b8.5.jpg';
import AudiDPF from './Cars/AUDI dpf.jpg';
import vwGolf7white from './Cars/bijeli golf 7 mapa.jpg';
import BMWf10 from './Cars/BMW 520d.jpg';
import BMWe91318d from './Cars/BMW e91 318d.jpg';
import BMWe91320d from './Cars/BMW e91 320d.jpg';
import BMWe91320dtuning from './Cars/BMW e91 320d čuning.jpg';
import BMWe92320d from './Cars/BMW e92 320d.jpg';
import BMWf32420d from './Cars/BMW F32 420d.jpg';
import CitroenC5dpf from './Cars/cITROEN c5 DPF OFF.jpg';
import CitroenDpf from './Cars/cITROEN DPF OFF.jpg';
import OpelCorsaDpf from './Cars/corsa dpf.jpg';
import OpelCorsaE from './Cars/corsa e mapa.jpg';
import vwGolf6black from './Cars/crni golf 6.jpg';
import vwGolf7black from './Cars/crni golf 7 tdi.jpg';
import SeatLeon from './Cars/crveni leon.jpg';
import Fiatjtd from './Cars/FIAT  1.9jtd.jpg';
import FiatDpf from './Cars/FIAT DPF.jpg';
import vwGolf5 from './Cars/Golf 5.jpg';
import vwGolfsilver from './Cars/golf sivi uređene kocke 13-36.jpg';
import MazdaAdblue from './Cars/MAZDA adblue.jpg';
import MazdaDpf from './Cars/MAZDA dpf off 6.jpg';
import RenaultMeganBlack from './Cars/megan crni.jpg';
import RenaultMeganRed from './Cars/megan crveni.jpg';
import MiniCooper from './Cars/Mini cooper mapa.jpg';
import Greymk7 from './Cars/moj.jpg';
import OpelCorsaEmap from './Cars/OPEL corsa e.jpg';
import OpelCorsaEpop from './Cars/OPEL corsa opc bang.jpg';
import OpelAstraRed from './Cars/opel crena astaa.jpg';
import PeugeotDpf from './Cars/PEUGEOT 1.6hdi DPF crni.jpg';
import PeugeotDpf2 from './Cars/PEUGEOT 1.6hdi DPF.jpg';
import PeugeotMap from './Cars/PEUGEOT 1.6hdi mapa sivi.jpg';
import PeugeotMap2 from './Cars/PEUGEOT 1.6hdi mapa.jpg';
import PeugeotDecat from './Cars/PEUGEOT 1.6vti decat.jpg';
import PeugeotMap3 from './Cars/PEUGEOT5008 1.6hdi mapa.jpg';
import vwPolo from './Cars/polo 1.2.jpg';
import RenaultClioDpf from './Cars/RENAULT clio dpf.jpg';
import SeatLeonBlack from './Cars/seat leon crni.jpg';
import vwGolf6dpf from './Cars/sivi golf  6 dpf.jpg';
import vwGolf4 from './Cars/sivi golf 4 crna tablica.jpg';
import vwGolf5fnf from './Cars/sivi golf 5 tedeji karbon.jpg';
import vwGolf6map from './Cars/sivi golf 6 2.0.jpg';
import vwGolf7map from './Cars/sivi golf 7 mapa.jpg';
import vwGolf7map2 from './Cars/sivi golf 7.jpg';
import Smart from './Cars/SMART branik popravak.jpg';
import vwGolf6dpf2 from './Cars/VW golf 6 dpf.jpg';
import vwPoloDpf from './Cars/VW polo dpf.jpg';


const options  = [
    {value:'Volkswagen', label:'Volkswagen'},
    {value:'Alfa', label:'Alfa'},
    {value:'Fiat', label:'Fiat'},
    {value:'BMW', label:'BMW'}
]


const customStyles = {
    container: (provided) => ({
      ...provided,
      display: 'inline-block',
      width: '250px',
      minHeight: '1px',
      textAlign: 'left',
      border: 'none',
    }),
    control: (provided) => ({
      ...provided,
      border: '2px solid #757575',
      borderRadius: '0',
      minHeight: '1px',
      height: '42px',
    }),
    input: (provided) => ({
      ...provided,
      minHeight: '1px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      minHeight: '1px',
      paddingTop: '0',
      paddingBottom: '0',
      color: '#757575',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      minHeight: '1px',
      height: '24px',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      minHeight: '1px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      minHeight: '1px',
      height: '40px',
      paddingTop: '0',
      paddingBottom: '0',
    }),
    singleValue: (provided) => ({
      ...provided,
      minHeight: '1px',
      paddingBottom: '2px',
    }),
  };

window.onload = function () {
  
document.getElementById('searchFilter').onclick = function getSelectValue(){
    var izabrano = document.getElementById("odabrao").value;
    console.log(izabrano);
  }
}

const Album = () => {
    return(
        <div>
        <h1>Naš rad</h1> 
        <Select options= {options} styles={customStyles} id="odabrao"/>  
        <button type="button" id="searchFilter" onclick="getSelectedValue()">Pretraži</button> 
        <div className='hover'>
            <img src={Abarth} alt='Abarth' id='Fiat' onClick=""></img>
            <img src={Alfa} alt='Alfa' id='Alfa'></img>
            <img src={Astra} alt='Astra' id='Opel'></img> 
            <img src={AudiPop} alt='Audi pop' id='Audi'></img>
            <img src={AudiA1red} alt='Audi A1 red' id='Audi'></img>
            <img src={AudiA1} alt='Audi A1' id='Audi'></img>
            <img src={AudiA3} alt='Audi a3' id='Audi'></img>
            <img src={AudiA4black} alt='Audi a4 black' id='Audi'></img>
            <img src={AudiA4blue} alt='Audi a4 blue' id='Audi'></img>
            <img src={AudiB85} alt='Audi b8.5' id='Audi'></img>
            <img src={AudiDPF} alt='Audi DPF' id='Audi'></img>
            <img src={vwGolf7white} alt='VW Golf 7' id='VW'></img>
            <img src={BMWf10} alt='BMW F10' id='BMW'></img>
            <img src={BMWe91318d} alt='BMW E91 318D' id='BMW'></img>
            <img src={BMWe91320d} alt='BMW E91 320D' id='BMW'></img>
            <img src={BMWe91320dtuning} alt='BMW E91 320D ČUNING' id='BMW'></img>
            <img src={BMWe92320d} alt='BMW E92 320D' id='BMW'></img>
            <img src={BMWf32420d} alt='BMW F32 420D' id='BMW'></img>
            <img src={CitroenC5dpf} alt='Citroen C5' id='Citroen'></img>
            <img src={CitroenDpf} alt='Citroen dpf' id='Citroen'></img>
            <img src={OpelCorsaDpf} alt='Opel corsa DPF' id='Opel'></img>
            <img src={OpelCorsaE} alt='Opel Corsa E ' id='Opel'></img>
            <img src={OpelCorsaEmap} alt='Opel Corsa E map' id='Opel'></img>
            <img src={OpelCorsaEpop} alt='Opel Corsa E pop n bang' id='Opel'></img>
            <img src={OpelAstraRed} alt='Opel Astra Red' id='Opel'></img>
            <img src={Greymk7} alt='Greymk7_ak now corsulja on IG' id='VW'></img>
            <img src={vwGolf5} alt='VW Golf 5' id='VW'></img>
            <img src={vwGolf5fnf} alt='VW Golf 5 fast and furious' id='VW'></img>
            <img src={vwGolf6black} alt='VW Golf 6 black' id='VW'></img>
            <img src={vwGolf6dpf} alt='VW Golf DPF' id='VW'></img>
            <img src={vwGolf6dpf2} alt='VW Golf DPF 2' id='VW'></img>
            <img src={vwGolf6map} alt='VW Golf 6 map' id='VW'></img>
            <img src={vwGolf7black} alt='VW Golf 7 Black' id='VW'></img>
            <img src={vwGolf7map} alt='VW Golf 7 map' id='VW'></img>
            <img src={vwGolf7map2} alt='VW Golf 7 map 2' id='VW'></img>
            <img src={vwGolf7white} alt='VW Golf 7 white' id='VW'></img>
            <img src={vwGolfsilver} alt='VW Golf Silver' id='VW'></img>
            <img src={vwPoloDpf} alt='VW Polo DPF' id='VW'></img>
            <img src={vwPolo} alt='VW Polo' id='VW'></img>
            <img src={vwGolf4} alt='VW Golf 4' id='VW'></img>
            <img src={SeatLeon} alt='Seat Leon' id='Seat'></img>
            <img src={SeatLeonBlack} alt='Seat Leon Black' id='Seat'></img>
            <img src={FiatDpf} alt='Fiat DPF' id='Fiat'></img>
            <img src={Fiatjtd} alt='Fiat jtd' id='Fiat'></img>
            <img src= {MazdaAdblue} alt='Mazda ad blue' id='Mazda'></img>
            <img src={MazdaDpf} alt='Mazda DPF' id='Mazda'></img>
            <img src={RenaultClioDpf} alt='Renault Clio DPF' id='Renault'></img>
            <img src={RenaultMeganBlack} alt='Renault Megan Black' id='Renault'></img>
            <img src={RenaultMeganRed} alt='Renault Megan Red' id='Renault'></img>
            <img src={MiniCooper} alt='Mini Cooper' id='Mini'></img>
            <img src={Smart} alt='Smart' id='Smart'></img>
            <img src={PeugeotDecat} alt='Peugeot decat' id='Peugeot'></img>
            <img src={PeugeotDpf} alt='Peugeot dpf' id='Peugeot'></img>
            <img src={PeugeotDpf2} alt='Peugeot dpf2' id='Peugeot'></img>
            <img src={PeugeotMap} alt='Peugeot map' id='Peugeot'></img>
            <img src={PeugeotMap2} alt='Peugeot map2' id='Peugeot'></img>
            <img src={PeugeotMap3} alt='Peugeot map3' id='Peugeot'></img>
        </div>
        </div>
    );

    
}


export default Album;