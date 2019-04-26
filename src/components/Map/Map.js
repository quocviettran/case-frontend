import React,{Component} from 'react';
import L from 'leaflet'; 
import './Map.css'
class Map extends Component {

    componentDidMount() {
        this.initMap();
    }

    initMap(){
        let lat = parseFloat(this.props.latitude)
        let lon = parseFloat(this.props.longitude)
        if(this.props.longitude !== undefined){
            this.map = leaflet.map('map', {
                center: [lat, lon],
                zoom: 10,
                layers: [
                    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                        maxZoom: 20,
                        id: 'mapbox.streets',
                        accessToken: 'pk.eyJ1IjoiYmFydGVrNzA4IiwiYSI6ImNqdHBrcGRyMzA1NjQ0ZHIwbHJsNnZvcm8ifQ.RjE2NlmMcunebCNLBiPlug'
                    }),
                ]
            });
            // add layer
            this.layer = L.layerGroup().addTo(this.map);
            L.marker([lat, lon]).addTo(this.map); 
        }else{
            //Create dummy
            this.map = leaflet.map('map', {
                center: [22, 22],
                zoom: 10,
                layers: [
                    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                        maxZoom: 20,
                        id: 'mapbox.streets',
                        accessToken: 'pk.eyJ1IjoiYmFydGVrNzA4IiwiYSI6ImNqdHBrcGRyMzA1NjQ0ZHIwbHJsNnZvcm8ifQ.RjE2NlmMcunebCNLBiPlug'
                    }),
                ]
            });
            // add layer
            this.layer = L.layerGroup().addTo(this.map);
            L.marker([22, 22]).addTo(this.map); 
        }
    }

    render() {
        return <div id="map"></div>
    }
}

export default Map;

