// Se define una capa de datos a partir de un archivo externo (fuentes ornamentales)

var fountainsIcon = L.icon({
	iconUrl: 'img/fountainmark.svg',
	shadowUrl: 'img/shadowmark.svg',
	iconSize: [60, 40],
	shadowSize: [60, 40],
	iconAnchor: [30, 40],
	shadowAnchor: [20, 40],
	popupAnchor:  [0, -30]
	});;
	
var fountainsLayer = L.geoJson(fountains, {
	pointToLayer: function(feature,latlng){
	var marker = L.marker(latlng,{icon: fountainsIcon});
	marker.bindPopup('<h3>'+feature.properties.name+'</h3>'+
	'<p style="text-align:right;"><a href="https://commons.wikimedia.org/wiki/'+feature.properties.wikimedia_commons+'" target="blanck">Imágenes en Commons</a> | <a href="https://openstreetmap.org/'+feature.properties.id+'" target="blanck">Ver en OSM</a></p>');
	return marker;
	}});
			
var fountainsClusters = L.markerClusterGroup({ showCoverageOnHover: false });
fountainsClusters.addLayer(fountainsLayer);
