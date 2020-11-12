import React, {useState} from 'react'
import ReactMapGl, {Marker} from 'react-map-gl'

function Map(){
    const [viewport, setViewport] = useState({
        latitude: 8.9806,
        longitude: 38.7578, 
        width: '500%',
        height: 500,
        zoom:12
    })

    return(
        <div className="map">
            <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            // mapStyle='mapbox://styles/ksolomon7/ckh6z2w72083419ny9823of08'
            mapStyle='mapbox://styles/ksolomon7/ckgh6bpp7060519pjac0q1pe6'
            onViewportChange={viewport=>{setViewport(viewport)}}
            >
                <Marker latitude={9.0049} longitude={38.7671}>
                    🇪🇹
                </Marker>
            </ReactMapGl>
        </div>
    )
}

export default Map