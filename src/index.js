'use strict'
import $ from 'jquery';
export default function bar() {
	var GoogleMapsLoader = require('google-maps'); // only for common js environments
 	
 	GoogleMapsLoader.KEY = 'AIzaSyBHOfCKisHSi-L7GanqSDr_KZk7G8-4i9o';

	GoogleMapsLoader.load(function(google) {
    	new google.maps.Map(document.querySelector('.content'), {
          zoom: 7,
          center: {lat: 48.563910, lng: 33}  
        });
	});
	console.log($);
	console.log("aaa");
	/*document.querySelector('.content').textContent+="HELLO!!";*/
}


