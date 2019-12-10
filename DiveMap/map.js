mapboxgl.accessToken = 'pk.eyJ1Ijoibm9lcyIsImEiOiJjanRmd3o2dnAwOGFuNDNwZm82cTZ2eGgyIn0.4wmZQIg2RbpZtWZfR-2PLA';

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/noes/cjtg6kjaz03e81fqb4qif7z2g', // style URL
  center: [118.32950023407346, -6.300759521738627], // starting position as [lng, lat]
  zoom: 5.0,
  maxBounds: [[104.190095937168,-10.797355876862767],[133.67740062468215,-1.061971767278365]]
});
map.scrollZoom.disable();
map.dragPan.disable();
map.doubleClickZoom.disable();

var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Bali"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          115.3564453125,
          -8.586452849594236
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gilis"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.04858398437499,
          -8.336517992258848
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Komodo"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          119.50927734374999,
          -8.602747284770006
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wangi-Wangi"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          123.55499267578125,
          -5.246862661161291
        ]
      }
    }
  ]
};

map.on('load',function(){
  geojson.features.forEach(function(marker){
    var el = document.createElement("div");
    el.className="marker";
    el.id = "marker";

    var popup = new mapboxgl.Popup()
      .setLngLat(marker.geometry.coordinates)
      .setHTML(popupSelect(marker.properties.name))
      .addTo(map)

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(popup)
      .addTo(map)

    //closes popups with esc-key
      $(document).keydown(function(e){
        if(e.keyCode == 27){
          popup.remove();
        }
      });
  });
});

function popupSelect(diveSite){
  var gallery;
  switch(diveSite){
    case 'Bali':
      gallery = '<h3>Photos Taken in Bali, Indonesia</h3>\
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
        <div class="carousel-inner">\
          <div class="carousel-item active">\
            <img class="d-block w-100" src="img/Bali/clown.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Bali/clown2.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Bali/ray.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Bali/temple.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Bali/nudis.jpg">\
          </div>\
        </div>\
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
          <span class="sr-only">Previous</span>\
        </a>\
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
          <span class="carousel-control-next-icon" aria-hidden="true"></span>\
          <span class="sr-only">Next</span>\
        </a>\
      </div>';
      break;
    case 'Gilis':
    gallery = '<h3>Photos Taken at Gili Air</h3>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Gilis/og-turtle.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/cuttle.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/cuttle-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/mantis.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/ray-shark.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/scorpion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/scorpion-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Gilis/trash-fish.jpg">\
        </div>\
      </div>\
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
        <span class="sr-only">Previous</span>\
      </a>\
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
        <span class="carousel-control-next-icon" aria-hidden="true"></span>\
        <span class="sr-only">Next</span>\
      </a>\
    </div>';
    break;
  case 'Komodo':
    gallery = '<h3>Photos Taken in Komodo National Park</h3>\
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
      <div class="carousel-inner">\
        <div class="carousel-item active">\
          <img class="d-block w-100" src="img/Komodo/lion.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark-3.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/croc.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/nemo-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/nemo.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/reef.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/reef-2.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/batfish.jpg">\
        </div>\
        <div class="carousel-item">\
          <img class="d-block w-100" src="img/Komodo/shark-3.jpg">\
        </div>\
      </div>\
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
        <span class="sr-only">Previous</span>\
      </a>\
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
        <span class="carousel-control-next-icon" aria-hidden="true"></span>\
        <span class="sr-only">Next</span>\
      </a>\
    </div>';
    break;
  case 'Wangi-Wangi':
    gallery = '<h3>Photos Taken at Wangi Wangi (Sulawesi)</h3>\
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">\
        <div class="carousel-inner">\
          <div class="carousel-item active">\
            <img class="d-block w-100" src="img/Wangi-Wangi/nudi.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Wangi-Wangi/orangutan.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Wangi-Wangi/snake.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Wangi-Wangi/lion.jpg">\
          </div>\
          <div class="carousel-item">\
            <img class="d-block w-100" src="img/Wangi-Wangi/ray.jpg">\
          </div>\
        </div>\
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">\
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
          <span class="sr-only">Previous</span>\
        </a>\
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">\
          <span class="carousel-control-next-icon" aria-hidden="true"></span>\
          <span class="sr-only">Next</span>\
        </a>\
      </div>';
      break;
  }
  return gallery;
};



// var mapTest = document.getElementById('map');
// markerTest.addEventListener('click',function(){
//   console.log('clicked!');
// });
// mapTest.addEventListener('click',function(){console.log('MAP clicked!')});
// markerTest.addEventListener('click',function(){console.log('!MARKER clicked!')});

//Useful Functions
// map.on('click',function(e){
//   console.log(e.lngLat);
// });
