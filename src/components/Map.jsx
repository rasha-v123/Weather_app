import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Map({ latitude, longitude }) {
  return (
    <div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={3}
        style={{ height: "500px", width: "600px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>
            `A marker at latitude {latitude} and {longitude}`
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
