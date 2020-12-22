
import React , {useState}from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import * as date from "./data/data.json"

export default function App(){

  const [viewport, setViewport] = useState({
    latitude: 38.89511,
    longitude: -77.03637,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

  return (
      <div>
      <ReactMapGL {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoiYmtlc2FyaTg5MTQiLCJhIjoiY2tpejJoYmk3MWo2YTJ4bXdyeDFxMGNzeCJ9.UD9p1xPtEWaquTQMqo5_Mg"}
      mapStyle="mapbox://styles/bkesari8914/ckiz36eam7bas1at478h20ntr"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}>
    {date.events.map(mark => (
        <Marker key={mark.properties.id}
                latitude={mark.geometries.coordinates[1]}
                longitude={mark.geometries.coordinates[0]}
        >
          <div>Disaster</div>
        </Marker>
    ))}
  </ReactMapGL>
  </div>
);
}