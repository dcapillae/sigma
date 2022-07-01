// Se definen las capas base del mapa
var cartociudad = L.tileLayer.wms("http://www.ign.es/wms-inspire/ign-base", {
	layers: "IGNBaseTodo",//Nombre de la capa (según proveedor del servicio)
	transparent: true,
	format: 'image/png',//Formato de las imágenes (según proveedor del servicio)
	version: '1.3.0',//versión según el proveedor del servicio
	attribution: '<a href="http://www.scne.es/productos.html#CartoCiudad" target="blanck">CartoCiudad</a> \u00a9 <a href="http://www.ign.es" target="blanck">Instituto Geográfico Nacional de España</a> (<a href="https://creativecommons.org/licenses/by/4.0/legalcode.es" target="blanck">CC BY 4.0</a>)'
	});
	
var osmcarto = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: 'Datos &copy; <a href="http://osm.org/copyright" target="blanck">Colaboradores de OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto" target="blanck">OSM Carto</a> &copy; Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
	});

var pnoa = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
	layers: "OI.OrthoimageCoverage",//Nombre de la capa (según proveedor del servicio)
	transparent: true,
	format: 'image/jpeg',//Formato de las imágenes (según proveedor del servicio)
	version: '1.3.0',//versión según el proveedor del servicio
	attribution: 'Ortofotos <a href="http://www.scne.es/productos.html#OrtoPNOA" target="blanck">PNOA</a> \u00a9 <a href="http://www.ign.es" target="blanck">Instituto Geográfico Nacional de España</a> (<a href="https://creativecommons.org/licenses/by/4.0/legalcode.es" target="blanck">CC BY 4.0</a>)'
});

// Se define una capa de datos a partir de un archivo externo (estacionamientos)

var parkingIcon = L.icon({
	iconUrl: '../../img/parking.svg',
	iconSize: [20,20]
	});;
	
var parkingLayer = L.geoJson(parking, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: parkingIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var parkingClusters = L.markerClusterGroup({ showCoverageOnHover: false });
parkingClusters.addLayer(parkingLayer);

// Se crea un objeto mapa, se le asigna al elemento contenedor 'map', se fijan su punto central y nivel de zum iniciales, la capa de teselas predeterminada y se anula el control de zum que se implementará con una extensión de Leaflet

var map = L.map('map', {
	center: [36.722, -4.420],
	zoom: 13,
	layers: [cartociudad, parkingClusters],
	zoomControl: false
	});

var baseLayers = {
	"Callejero IGN": cartociudad,
	"Callejero OSM": osmcarto,
	"Ortofotos PNOA": pnoa,
	};
	
var overlays = {
	'Estacionamientos reservados': parkingClusters,
	}

// Se añade el control de capas y se define su posición
L.control.layers(baseLayers, overlays, {position:'topright'}).addTo(map);

// Se añade el control de zum y vista inicial, definiendo su posición y texto emergentes
var zoomHome = L.Control.zoomHome({position: 'topleft', zoomHomeTitle: 'Vista inicial', zoomInTitle: 'Acercar', zoomOutTitle: 'Alejar'});
zoomHome.addTo(map);

// Se añaden URL dinámicas
var hash = new L.Hash(map);
