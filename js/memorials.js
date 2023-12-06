// Se define una capa de datos a partir de un archivo externo (estatuas)

var statuesIcon = L.icon({
	iconUrl: 'img/statuemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var statuesLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "statue", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'statue' ? !feature.properties.memorial : true;
		}
		return false;
	},
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: statuesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
//var statuesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
//statuesClusters.addLayer(statuesLayer);

// Se define una capa de datos a partir de un archivo externo (bustos)

var bustsIcon = L.icon({
	iconUrl: 'img/bustmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var bustsLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "bust", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'bust' ? !feature.properties.memorial : true;
		}
		return false;
	},
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: bustsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var bustsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
bustsClusters.addLayer(bustsLayer);

// Se define una capa de datos a partir de un archivo externo (placas)

var plaquesIcon = L.icon({
	iconUrl: 'img/plaquemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var plaquesLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "plaque", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'plaque' ? !feature.properties.memorial : true;
		}
		return false;
	},	
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: plaquesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var plaquesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
plaquesClusters.addLayer(plaquesLayer);

// Se define una capa de datos a partir de un archivo externo (esculturas)

var sculpturesIcon = L.icon({
	iconUrl: 'img/sculpturemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var sculpturesLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "sculpture", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'sculpture' ? !feature.properties.memorial : true;
		}
		return false;
	},	
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: sculpturesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var sculpturesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
sculpturesClusters.addLayer(sculpturesLayer);

// Se define una capa de datos a partir de un archivo externo (cruces)

var crossesIcon = L.icon({
	iconUrl: 'img/crossmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var crossesLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "cross", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'cross' ? !feature.properties.memorial : true;
		}
		return false;
	},	
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: crossesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var crossesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
crossesClusters.addLayer(crossesLayer);
	
// Se define una capa de datos a partir de un archivo externo (obeliscos)

var obelisksIcon = L.icon({
	iconUrl: 'img/obeliskmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var obelisksLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "obelisk", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'obelisk' ? !feature.properties.memorial : true;
		}
		return false;
	},
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: obelisksIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var obelisksClusters = L.markerClusterGroup({ showCoverageOnHover: false });
obelisksClusters.addLayer(obelisksLayer);

// Se define una capa de datos a partir de un archivo externo (rocas)

var stonesIcon = L.icon({
	iconUrl: 'img/stonemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var stonesLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "stone", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'stone' ? !feature.properties.memorial : true;
		}
		return false;
	},	
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: stonesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var stonesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
stonesClusters.addLayer(stonesLayer);

// Se define una capa de datos a partir de un archivo externo (inundaciones)

var floodmarksIcon = L.icon({
	iconUrl: 'img/flood_markmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var floodmarksLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "flood_mark", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'flood_mark' ? !feature.properties.memorial : true;
		}
		return false;
	},	

	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: floodmarksIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var floodmarksClusters = L.markerClusterGroup({ showCoverageOnHover: false });
floodmarksClusters.addLayer(floodmarksLayer);

// Se define una capa de datos a partir de un archivo externo (otros monumentos)

var othermemorialsIcon = L.icon({
	iconUrl: 'img/memorialmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var othermemorialsLayer = L.geoJson(memorials, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "memorial" existe y tiene un valor diferente de "flood_mark", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.memorial !== 'memorial' ? !feature.properties.memorial : true;
		}
		return false;	},
	
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: othermemorialsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var memorialsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
memorialsClusters.addLayer(statuesLayer);
memorialsClusters.addLayer(bustsLayer);
memorialsClusters.addLayer(plaquesLayer);
memorialsClusters.addLayer(sculpturesLayer);
memorialsClusters.addLayer(stonesLayer);
memorialsClusters.addLayer(crossesLayer);
memorialsClusters.addLayer(obelisksLayer);
memorialsClusters.addLayer(floodmarksLayer);
memorialsClusters.addLayer(othermemorialsLayer);


