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

// Se define una capa de datos a partir de un archivo externo (contenedores de basura)

var trashIcon = L.icon({
	iconUrl: '../../img/trash.svg',
	iconSize: [20,20]
	});;

var trashLayer = L.geoJson(trash, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: trashIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var trashClusters = L.markerClusterGroup({ showCoverageOnHover: false });
trashClusters.addLayer(trashLayer);

// Se define una capa de datos a partir de un archivo externo (contenedores de papel)

var paperIcon = L.icon({
	iconUrl: '../../img/paper.svg',
	iconSize: [20,20]
	});;

var paperLayer = L.geoJson(paper, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: paperIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var paperClusters = L.markerClusterGroup({ showCoverageOnHover: false });
paperClusters.addLayer(paperLayer);

// Se define una capa de datos a partir de un archivo externo (contenedores de plastico)

var plasticIcon = L.icon({
	iconUrl: '../../img/plastic.svg',
	iconSize: [20,20]
	});;

var plasticLayer = L.geoJson(plastic, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: plasticIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var plasticClusters = L.markerClusterGroup({ showCoverageOnHover: false });
plasticClusters.addLayer(plasticLayer);

// Se define una capa de datos a partir de un archivo externo (contenedores de vidrio)

var glassIcon = L.icon({
	iconUrl: '../../img/glass.svg',
	iconSize: [20,20]
	});;

var glassLayer = L.geoJson(glass, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: glassIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var glassClusters = L.markerClusterGroup({ showCoverageOnHover: false });
glassClusters.addLayer(glassLayer);
	
// Se define una capa de datos a partir de un archivo externo (contenedores de pilas)

var batteriesIcon = L.icon({
	iconUrl: '../../img/batteries.svg',
	iconSize: [20,20]
	});;

var batteriesLayer = L.geoJson(batteries, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: batteriesIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var batteriesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
batteriesClusters.addLayer(batteriesLayer);

// Se define una capa de datos a partir de un archivo externo (contenedores de aceite)

var oilIcon = L.icon({
	iconUrl: '../../img/oil.svg',
	iconSize: [20,20]
	});;

var oilLayer = L.geoJson(oil, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: oilIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var oilClusters = L.markerClusterGroup({ showCoverageOnHover: false });
oilClusters.addLayer(oilLayer);

// Se define una capa de datos a partir de un archivo externo (contenedores de ropa)

var clothesIcon = L.icon({
	iconUrl: '../../img/clothes.svg',
	iconSize: [20,20]
	});;
	var clothesLayer = L.geoJson(clothes, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: clothesIcon});
	marker.bindPopup('<a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a>');
	return marker;
	}});
			
var clothesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
clothesClusters.addLayer(clothesLayer);

// Se crea un objeto mapa, se le asigna al elemento contenedor 'map', se fijan su punto central y nivel de zum iniciales, la capa de teselas predeterminada y se anula el control de zum que se implementará con una extensión de Leaflet

var map = L.map('map', {
	center: [36.722, -4.420],
	zoom: 13,
	layers: [cartociudad],
	zoomControl: false
	});

var baseLayers = {
	"Callejero IGN": cartociudad,
	"Callejero OSM": osmcarto,
	"Ortofotos PNOA": pnoa,
	};
	
var overlays = {
	'<img src="../../img/trash.svg" width="12" height="12"> Contenedores de basura': trashClusters,
	'<img src="../../img/paper.svg" width="12" height="12"> Contenedores de papel': paperClusters,
	'<img src="../../img/plastic.svg" width="12" height="12"> Contenedores de plásticos': plasticClusters,
	'<img src="../../img/glass.svg" width="12" height="12"> Contenedores de vidrio': glassClusters,
	'<img src="../../img/batteries.svg" width="12" height="12"> Contenedores de pilas': batteriesClusters,
	'<img src="../../img/oil.svg" width="12" height="12"> Contenedores de aceite': oilClusters,
	'<img src="../../img/clothes.svg" width="12" height="12"> Contenedores de ropa': clothesClusters
	}

// Se añade el control de capas y se define su posición
L.control.layers(baseLayers, overlays, {position:'topright'}).addTo(map);

// Se añade el control de zum y vista inicial, definiendo su posición y texto emergentes
var zoomHome = L.Control.zoomHome({position: 'topleft', zoomHomeTitle: 'Vista inicial', zoomInTitle: 'Acercar', zoomOutTitle: 'Alejar'});
zoomHome.addTo(map);

// Se añaden URL dinámicas
var hash = new L.Hash(map);
