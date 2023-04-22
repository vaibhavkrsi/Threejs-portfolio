import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-90.0, -30.0, 0], 
        center: [-5, -3],
        scale: 1100
      }}
      style={{width:"100%",height:"90%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C0650"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[75.5937, 25.9629]}  
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
        
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"India"}
        </text>
        
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
