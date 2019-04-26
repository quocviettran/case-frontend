import React from 'react';
import L from 'leaflet';  

class Map extends React.Component {

    componentDidMount() {
        let lat = parseFloat(this.props.latitude)
        let lon = parseFloat(this.props.longitude)
        if(this.props.longitude !== undefined){
            this.map = L.map('map', {
                center: [lat, lon],
                zoom: 12,
                layers: [
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }),
                ]
            });
            // add layer
            this.layer = L.layerGroup().addTo(this.map);
            L.marker([lat, lon]).addTo(this.map); 
        }else{
            //Create dummy
            this.map = L.map('map', {
                center: [22, 22],
                zoom: 12,
                layers: [
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    }),
                ]
            });
            // add layer
            this.layer = L.layerGroup().addTo(this.map);
            L.marker([22, 22]).addTo(this.map); 
        }
    }
    render() {
        return <div id="map" style={{height:"600px"}}></div>
    }
}

export default Map;