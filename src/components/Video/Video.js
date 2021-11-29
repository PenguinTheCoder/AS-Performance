import React from 'react';
import './Video.css';
import CorsaEpop from './Clips/CorsaEpop.mp4';
import Abarth from './Clips/Abarth.mp4';
import AudiRev from './Clips/AudiRev.mp4';
import BMW1 from './Clips/BMW1.mp4';
import OPCblack from './Clips/OPCblack.mp4';
import OPCblue from './Clips/OPCblue.mp4';
import PeugeotRC from './Clips/PeugeotRC.mp4';
import PoloIdle from './Clips/PoloIdle.mp4';
import AstraGTC from './Clips/AstraGTC.mp4';

const Video = () => {  
    return (
        <div className='stani' >
             <br></br>  <br></br> <br></br> <br></br> <br></br>
            <h1>Ispušni sustav</h1>
            <div className='inLine'>
            <iframe src={CorsaEpop} title='Corsa E pop n bang' ></iframe>
            <iframe src={Abarth} title='Abarth'></iframe>
            <iframe src={AudiRev} title='Audi Rev limiter'></iframe>
            <iframe src={BMW1} title='1series'></iframe>
            <iframe src={OPCblack} title='OPC Black 300hp'></iframe>
            <iframe src={OPCblue} title='OPC Blue'></iframe>
            <iframe src={PeugeotRC} title='Peugeot RC'></iframe>
            <iframe src={PoloIdle} title='Polo on idle'></iframe>
            <iframe src={AstraGTC} title='Astra GTC'></iframe>

        </div>
        </div>

        
    )
}

export default Video;