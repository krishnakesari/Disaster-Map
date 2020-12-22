
import React , {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import LocationMarker from "./LocationMarker";

export default function Map(){

const [viewport, setViewport] = useState({
    latitude: 38.897957,
    longitude: -77.036560,
    width: '100vw',
    height: '100vh',
    zoom: 12
  });

    return (
        <div>
            <ReactMapGL {...viewport}
                        mapboxApiAccessToken={"pk.eyJ1IjoiYmtlc2FyaTg5MTQiLCJhIjoiY2tpejJoYmk3MWo2YTJ4bXdyeDFxMGNzeCJ9.UD9p1xPtEWaquTQMqo5_Mg"}
                        mapStyle="mapbox://styles/bkesari8914/ckizxmj2g84901aql0nk5f8bt"
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}>
                <LocationMarker latitude={viewport.latitude} longitude={viewport.longitude}/>
            </ReactMapGL>
        </div>
    );
}