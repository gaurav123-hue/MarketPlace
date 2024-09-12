import React from 'react'
import "leaflet/dist/leaflet.css";
import { Marker ,Popup,MapContainer,} from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import MapPin from './MapPin';

export default function Map({items}) {
    
    return (
        <div className="px-2 sm:px-0">

            <MapContainer center={[51.5074, -0.1278]} zoom={5} scrollWheelZoom={true} className="h-custom-h w-full ">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {items.map(item=>(
                    <MapPin item={item} key={item.id}/>
                ))}
            </MapContainer>
        </div>
    )
}
