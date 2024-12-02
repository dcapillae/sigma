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

// Se define una capa de datos a partir de un archivo externo (árboles de Navidad)

var treesIcon = L.icon({
	iconUrl: '../../img/christmas/tree.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var treesLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "tree", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'tree' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: treesIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});

var treesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
treesClusters.addLayer(treesLayer);

// Se define una capa de datos a partir de un archivo externo (Artículos)

var shopsIcon = L.icon({
	iconUrl: '../../img/christmas/shop.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var shopsLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "shop", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'shop' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: shopsIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});

var shopsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
shopsClusters.addLayer(shopsLayer);

// Se define una capa de datos a partir de un archivo externo (belenes)

var cribsIcon = L.icon({
	iconUrl: '../../img/christmas/crib.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var cribsLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "crib", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'crib' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: cribsIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var cribsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
cribsClusters.addLayer(cribsLayer);

// Se define una capa de datos a partir de un archivo externo (eventos)

var eventsIcon = L.icon({
	iconUrl: '../../img/christmas/event.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var eventsLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "event", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'event' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: eventsIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var eventsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
eventsClusters.addLayer(eventsLayer);

// Se define una capa de datos a partir de un archivo externo (buzones de Reyes/Santa)

var letterboxesIcon = L.icon({
	iconUrl: '../../img/christmas/santas-letterbox.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var letterboxesLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "letterboxes", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'santas-letterbox' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: letterboxesIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var letterboxesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
letterboxesClusters.addLayer(letterboxesLayer);

// Se define una capa de datos a partir de un archivo externo (Luces)

var lightingIcon = L.icon({
	iconUrl: '../../img/christmas/lighting.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var lightingLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "tree", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'lighting' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: lightingIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});

var lightingClusters = L.markerClusterGroup({ showCoverageOnHover: false });
lightingClusters.addLayer(lightingLayer);

// Se define una capa de datos a partir de un archivo externo (Mercados)

var marketsIcon = L.icon({
	iconUrl: '../../img/christmas/market.svg',
	iconSize: [30,30],
	shadowUrl: '../../img/christmas/shadowmark.svg',
	shadowSize: [30, 30],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [-15, -40]
	});;
	
var marketsLayer = L.geoJson(christmas, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "xmas:feature" existe y tiene un valor diferente de "tree", devuelve "falso" (no representa el objeto)
			return feature.properties.feature !== 'market' ? !feature.properties.feature : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: marketsIcon});
	marker.bindPopup('<strong><font size="+1">'+feature.properties.name+'</font></strong>'+'<br>'+feature.properties.description+' '+feature.properties.location+'<br><br>'+feature.properties.day_date+'<br>'+feature.properties.opening_hours+'<br><br>'+'Revisión: '+feature.properties.check_date+' | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});

var marketsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
marketsClusters.addLayer(marketsLayer);

// Se crea un objeto mapa, se le asigna al elemento contenedor 'map', se fijan su punto central y nivel de zum iniciales, la capa de teselas predeterminada y se anula el control de zum que se implementará con una extensión de Leaflet


var map = L.map('map', {
	center: [36.722, -4.420],
	zoom: 14,
	layers: [cartociudad, treesClusters, shopsClusters, cribsClusters, letterboxesClusters, eventsClusters, lightingClusters, marketsClusters],
	zoomControl: false
	});

var baseLayers = {
	"Callejero IGN": cartociudad,
	"Callejero OSM": osmcarto,
	"Ortofotos PNOA": pnoa,
	};
	
var overlays = {
	'Árboles de Navidad': treesClusters,
	'Artículos navideños': shopsClusters,
	'Belenes / Nacimientos': cribsClusters,
	'Buzones de Navidad': letterboxesClusters,
	'Eventos navideños': eventsClusters,
	'Luces de Navidad': lightingClusters,
	'Mercados navideños': marketsClusters,

	}

// Se añade el control de capas y se define su posición
L.control.layers(baseLayers, overlays, {position:'topright', collapsed: false}).addTo(map);

// Se añade el control de zum y vista inicial, definiendo su posición y texto emergentes
var zoomHome = L.Control.zoomHome({position: 'topleft', zoomHomeTitle: 'Vista inicial', zoomInTitle: 'Acercar', zoomOutTitle: 'Alejar'});
zoomHome.addTo(map);

// Se añaden URL dinámicas
var hash = new L.Hash(map);
