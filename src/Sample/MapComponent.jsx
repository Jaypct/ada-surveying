import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconR from "leaflet/dist/images/marker-icon-2x.png";
import iconU from "leaflet/dist/images/marker-icon.png";
import iconS from "leaflet/dist/images/marker-shadow.png";
import React from "react";

// Fix Leaflet's default marker icon path (important for Vite, Webpack, etc.)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconR,
  iconUrl: iconU,
  shadowUrl: iconS,
});

const locations = [
  {
    position: [10.6667, 122.95],
    title: "Negros Occidental",
    description: [
      {
        staking: "Construction and Alignment Survey",
        asBuilt: "As-Built Survey",
        reloc: "Relocation/Boundary Survey",
        verification: "Verification Survey",
        subd: "Subdivision/Consilidation Survey",
        topo: "Topographic Survey",
      },
    ],
  },

  {
    position: [11.8333, 125.0],
    title: "Samar",
    description: [
      {
        staking: "Construction and Alignment Survey",
        asBuilt: "As-Built Survey",
        reloc: "Relocation/Boundary Survey",
        verification: "Verification Survey",
      },
    ],
  },

  {
    position: [10.3157, 123.8854],
    title: "Cebu City",
    description: [
      {
        reloc: "Relocation/Boundary Survey",
      },
    ],
  },

  {
    position: [10.7202, 122.5621],
    title: "Ilo-ilo City",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  {
    position: [13.7565, 121.0583],
    title: "Batangas City",
    description: [
      {
        topo: "Topographic Survey",
        reloc: "Relocation/Boundary Survey",
        asBuilt: "As-Built Survey",
      },
    ],
  },

  {
    position: [9.85, 124.1435],
    title: "Bohol",
    description: [
      {
        asBuilt: "As-Built Survey",
      },
    ],
  },

  {
    position: [15.485, 120.5963],
    title: "Tarlac",
    description: [
      {
        topo: "Topographic Survey",
        reloc: "Relocation/Boundary Survey",
        asBuilt: "As-Built Survey",
      },
    ],
  },

  {
    position: [10.5929, 122.6325],
    title: "Guimaras",
    description: [
      {
        reloc: "Relocation/Boundary Survey",
      },
    ],
  },

  {
    position: [9.8432, 118.7384],
    title: "Palawan",
    description: "Relocation Survey & Topographic Survey - 92,200 sqm",
  },

  // Add more locations here
];

export default function MapComponent() {
  return (
    <div className="w-full h-[700px] md:w-1/2 lg:h-[600px] rounded-lg shadow-md overflow-hidden">
      <MapContainer
        center={[12.8797, 121.774]}
        zoom={6}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker position={loc.position} key={i}>
            <Popup>
              <div className="text-sm">
                <h2 className="font-semibold">{loc.title}</h2>
                {Array.isArray(loc.description) ? (
                  <ul className="text-xs list-disc ml-4 space-y-1">
                    {loc.description.map((desc, index) => (
                      // For each description object, create multiple <li>s for each field
                      <React.Fragment key={index}>
                        {desc.topo && <li>{desc.topo}</li>}
                        {desc.reloc && <li>{desc.reloc}</li>}
                        {desc.asBuilt && <li>{desc.asBuilt}</li>}
                        {desc.staking && <li>{desc.staking}</li>}
                        {desc.verification && <li>{desc.verification}</li>}
                        {desc.subd && <li>{desc.subd}</li>}
                      </React.Fragment>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs">{loc.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
