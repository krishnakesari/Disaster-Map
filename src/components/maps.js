import React , {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as parkDate from "../data/data.json";

export default function Map(){

const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

const [selectedPark, setSelectedPark] = useState(null);

useEffect(() => {
    const listener = (e) => {
        if(e.key === "Escape") {
            setSelectedPark(null);
        }
    };
    window.addEventListener("keydown", listener);

    return () => {
        window.removeEventListener("keydown", listener);
    }
}, []);

    return (
        <div>
            <ReactMapGL {...viewport}
                        mapboxApiAccessToken={"pk.eyJ1IjoiYmtlc2FyaTg5MTQiLCJhIjoiY2tpejJoYmk3MWo2YTJ4bXdyeDFxMGNzeCJ9.UD9p1xPtEWaquTQMqo5_Mg"}
                        mapStyle="mapbox://styles/bkesari8914/ckizxmj2g84901aql0nk5f8bt"
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}>
                {parkDate.features.map(park => (
                     <Marker key={park.properties.PARK_ID}
                     latitude={park.geometry.coordinates[1]}
                     longitude={park.geometry.coordinates[0]}
                     >
                     <button className= "marker-btn" onClick={(e) => {
                         e.preventDefault();
                         setSelectedPark(park);
                     }}>
                         <img className= "img" src="/skate.png" alt={"Skate Icon"} />
                     </button>
                </Marker>
                ))}
                {selectedPark ? (
                   <Popup className="popup" latitude = {selectedPark.geometry.coordinates[1]}
                          longitude ={selectedPark.geometry.coordinates[0]}
                          onClose = {() => {
                              setSelectedPark(null)
                          }}
                   >
                       <div>
                           <h4>{selectedPark.properties.NAME}</h4>
                           <h4>{selectedPark.properties.DESCRIPTIO}</h4>
                           <h5>{selectedPark.properties.NOTES}</h5>
                       </div>
                   </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}