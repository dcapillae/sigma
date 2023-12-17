// Se define una capa de datos a partir de un archivo externo (estatuas artísticas)

var artworkstatuesIcon = L.icon({
	iconUrl: 'img/artworks/statuemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var artworkstatuesLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "statue", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'statue' ? !feature.properties.artwork_type : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: artworkstatuesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
		
var artworkstatuesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
artworkstatuesClusters.addLayer(artworkstatuesLayer);

// Se define una capa de datos a partir de un archivo externo (esculturas artísticas)

var artworksculpturesIcon = L.icon({
	iconUrl: 'img/artworks/sculpturemark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var artworksculpturesLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "sculpture", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'sculpture' ? !feature.properties.artwork_type : true;
		}
		return false;	},

	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: artworksculpturesIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var artworksculpturesClusters = L.markerClusterGroup({ showCoverageOnHover: false });
artworksculpturesClusters.addLayer(artworksculpturesLayer);

// Se define una capa de datos a partir de un archivo externo (relieves)

var reliefsIcon = L.icon({
	iconUrl: 'img/artworks/reliefmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var reliefsLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "relieve", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'relief' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: reliefsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var reliefsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
reliefsClusters.addLayer(reliefsLayer);

// Se define una capa de datos a partir de un archivo externo (murales artísticos)

var muralsIcon = L.icon({
	iconUrl: 'img/artworks/muralmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var muralsLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "mural", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'mural' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: muralsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var muralsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
muralsClusters.addLayer(muralsLayer);

// Se define una capa de datos a partir de un archivo externo (grafitis)

var graffitiIcon = L.icon({
	iconUrl: 'img/artworks/graffitimark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var graffitiLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "graffiti", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'graffiti' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: graffitiIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var graffitiClusters = L.markerClusterGroup({ showCoverageOnHover: false });
graffitiClusters.addLayer(graffitiLayer);

// Se define una capa de datos a partir de un archivo externo (mosaicos)

var tileworksIcon = L.icon({
	iconUrl: 'img/artworks/tileworkmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var tileworksLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "tilework", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'tilework' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: tileworksIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var tileworksClusters = L.markerClusterGroup({ showCoverageOnHover: false });
tileworksClusters.addLayer(tileworksLayer);

// Se define una capa de datos a partir de un archivo externo (azulejos)

var azulejosIcon = L.icon({
	iconUrl: 'img/artworks/azulejomark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var azulejosLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "azulejo", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'azulejo' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: azulejosIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var azulejosClusters = L.markerClusterGroup({ showCoverageOnHover: false });
azulejosClusters.addLayer(azulejosLayer);

// Se define una capa de datos a partir de un archivo externo (arte urbano)

var street_artIcon = L.icon({
	iconUrl: 'img/artworks/street_artmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var street_artLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "street_art", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'street_art' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: street_artIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var street_artClusters = L.markerClusterGroup({ showCoverageOnHover: false });
street_artClusters.addLayer(street_artLayer);

// Se define una capa de datos a partir de un archivo externo (otras obras de arte)

var otherartworksIcon = L.icon({
	iconUrl: 'img/artworks/artworkmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var otherartworksLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "artwork", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'artwork' ? !feature.properties.artwork_type : true;
		}
		return false;	},
		
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: otherartworksIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var artworksClusters = L.markerClusterGroup({ showCoverageOnHover: false });
artworksClusters.addLayer(artworkstatuesLayer);
artworksClusters.addLayer(artworksculpturesLayer);
artworksClusters.addLayer(reliefsLayer);
artworksClusters.addLayer(muralsLayer);
artworksClusters.addLayer(graffitiLayer);
artworksClusters.addLayer(street_artLayer);
artworksClusters.addLayer(tileworksLayer);
artworksClusters.addLayer(azulejosLayer);
artworksClusters.addLayer(otherartworksLayer);


