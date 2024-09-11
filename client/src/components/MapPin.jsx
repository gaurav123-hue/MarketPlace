import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

export default function MapPin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <Link to={`/${item.id}`}>

                    <div className="flex gap-x-2">

                        <div>

                            <img src={item.img} alt="" className='h-16 w-16' />

                        </div>
                        <div>
                            <span className="text-md text-slate-700">
                                {item.title}
                            </span>
                            <h5>
                                {item.bedroom} Bedrooms
                            </h5>
                            <h3 className="font-bold ">
                                {`$${item.price}`}
                            </h3>
                        </div>
                    </div>
                </Link>
            </Popup>
        </Marker >
    );
}
