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

// Se define una capa de datos a partir de un archivo externo (murales artísticos)

var artworkmuralsIcon = L.icon({
	iconUrl: 'img/artworks/muralmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;

var artworkmuralsLayer = L.geoJson(artworks, {
	filter(feature, layer) {
		if (feature.properties) {
			// Si la propiedad "artwork_type" existe y tiene un valor diferente de "mural", devuelve "falso" (no representa el objeto conmemorativo)
			return feature.properties.artwork_type !== 'mural' ? !feature.properties.artwork_type : true;
		}
		return false;	},
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: artworkmuralsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});

var artworkmuralsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
artworkmuralsClusters.addLayer(artworkmuralsLayer);

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
artworksClusters.addLayer(artworkmuralsLayer);
artworksClusters.addLayer(otherartworksLayer);


