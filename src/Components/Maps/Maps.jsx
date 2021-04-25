import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const style = {
    width: '900px',
    height: '600px'
}


class Maps extends Component {
    render() {
        return (
            <>
                <Map google={this.props.google} style={style} zoom={4}>
 
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAtSgbgPdrX4s0jLS7EZXG0x7XwNUEf-Zo')
})(Maps)

// import { Loader } from "@googlemaps/js-api-loader"

// const loader = new Loader({
//     apiKey: "AIzaSyAtSgbgPdrX4s0jLS7EZXG0x7XwNUEf-Zo",
//     version: "weekly",
//     ...additionalOptions,
//   });
//   loader.load().then(() => {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   });