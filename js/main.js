// Se definen las capas base del mapa
var cartociudad = L.tileLayer.wms("http://www.ign.es/wms-inspire/ign-base", {
	layers: "IGNBaseTodo",//Nombre de la capa (según proveedor del servicio)
	transparent: true,
	format: 'image/png',//Formato de las imágenes (según proveedor del servicio)
	version: '1.3.0',//versión según el proveedor del servicio
	attribution: '<a href="http://www.scne.es/productos.html#CartoCiudad" target="blanck">CartoCiudad</a> \u00a9 <a href="http://www.ign.es" target="blanck">Instituto Geográfico Nacional de España</a> (<a href="https://creativecommons.org/licenses/by/4.0/legalcode.es" target="blanck">CC BY 4.0</a>)',
	maxZoom: 21
	});
	
var pnoa = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
	layers: "OI.OrthoimageCoverage",//Nombre de la capa (según proveedor del servicio)
	transparent: true,
	format: 'image/jpeg',//Formato de las imágenes (según proveedor del servicio)
	version: '1.3.0',//versión según el proveedor del servicio
	attribution: 'Ortofotos <a href="http://www.scne.es/productos.html#OrtoPNOA" target="blanck">PNOA</a> \u00a9 <a href="http://www.ign.es" target="blanck">Instituto Geográfico Nacional de España</a> (<a href="https://creativecommons.org/licenses/by/4.0/legalcode.es" target="blanck">CC BY 4.0</a>)',
	maxZoom: 21
});

var osmcarto = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: 'Datos &copy; <a href="http://osm.org/copyright" target="blanck">Colaboradores de OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto" target="blanck">OSM Carto</a> &copy; Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)',
    maxZoom: 21
   });

var osmfr = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	attribution: 'Datos &copy; <a href="http://osm.org/copyright" target="blanck">Colaboradores de OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>) | Teselas © <a href="https://www.openstreetmap.fr/mentions-legales/">OpenStreetMap France</a> (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)',
   maxZoom: 21
	});

var osmhumanitarian = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org">' + 'Colaboradores de OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas \u00a9 <a href="https://github.com/hotosm/HDM-CartoCSS">Humanitarian HDM CartoCSS</a> (<a href="https://github.com/hotosm/HDM-CartoCSS/blob/master/LICENCE.txt" target="blanck">CC0 1.0</a>)',
	maxZoom: 21
	});

var opentopomap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Datos &copy; <a href="http://osm.org/copyright" target="blanck">Colaboradores de OpenStreetMap</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>), SRTM | Teselas © <a href="https://opentopomap.org/">OpenTopoMap Maps</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.es" target="blanck">CC BY-SA 3.0</a>)',
    maxZoom: 17
	});

// Se define una capa de datos a partir de un archivo externo (distritos)

var boroughsLayer = L.geoJSON(boroughs, {
		style: function(feature){
      return { color: "brown", weight: 4, fillColor: "brown", fillOpacity: .0 };
      },
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.name+'</h3>'+
    'Wikidata: '+'<a href="https://www.wikidata.org/wiki/'+feature.properties.wikidata+'" target="blanck"">'+feature.properties.wikidata+'</a><br/>'+
    'OSM: '+'<a href="https://www.openstreetmap.org/'+feature.properties.id+'" target="blanck">'+feature.properties.id+'</a>');
  }
});

// Se define una capa de datos a partir de un archivo externo (barrios)

var neighbourhoodsLayer = L.geoJSON(neighbourhoods, {
	   style: function(feature){
      return { color: "#fc8702", weight: 2, fillColor: "#fc8702", fillOpacity: .0 };
    },
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h3>'+feature.properties.name+'</h3>'+
    'Wikidata: '+'<a href="https://www.wikidata.org/wiki/'+feature.properties.wikidata+'" target="blanck"">'+feature.properties.wikidata+'</a><br/>'+
    'OSM: '+'<a href="https://www.openstreetmap.org/'+feature.properties.id+'" target="blanck">'+feature.properties.id+'</a>',);
  }
});

// Se crea un objeto mapa, se le asigna al elemento contenedor 'map', se fijan su punto central y nivel de zum iniciales, la capa de teselas predeterminada y se anula el control de zum que se implementará con una extensión de Leaflet

var map = L.map('map', {
		center: [36.722, -4.420],
		zoom: 13,
		layers: [osmcarto],
		zoomControl: false
	});

var baseLayers = {
		"Callejero IGN": cartociudad,
		"Ortofotos PNOA": pnoa,
		"Callejero OSM": osmcarto,
//		"Callejero OSM FR": osmfr,
		"Humanitario OSM": osmhumanitarian,
		"Topográfico OTM": opentopomap
	};
	
var overlays = {
	"Distritos": boroughsLayer,
	"Barrios": neighbourhoodsLayer,
	"Monumentos conmemorativos": memorialsClusters,
	"Obras de arte": artworksClusters,
	"Fuentes ornamentales": fountainsClusters
}


// Se añade el control de capas y se define su posición
L.control.layers(baseLayers, overlays, {position:'topright'}).addTo(map);

// Se añade el control de zum y vista inicial, definiendo su posición y texto emergentes
var zoomHome = L.Control.zoomHome({position: 'topleft', zoomHomeTitle: 'Vista inicial', zoomInTitle: 'Acercar', zoomOutTitle: 'Alejar'});
    zoomHome.addTo(map);

// Se añaden URL dinámicas
//var hash = new L.Hash(map);


var allMapLayers = {
	'C': cartociudad,
	'P': pnoa,
	'O': osmcarto,
//	'F': osmfr,
	'H': osmhumanitarian,
	'T': opentopomap,
	'd': boroughsLayer,
	'b': neighbourhoodsLayer,
	'f': fountainsClusters,
	'a': artworksClusters,
	'm': memorialsClusters,
	};

L.hash(map, allMapLayers);

// Se añade control de posición del ratón con el signo coma (,) como separador de coordenadas geográficas y mensaje inicial personalizado

L.control.mousePosition({
	separator:',',
	emptyString:'No disponible'
	}).addTo(map);
