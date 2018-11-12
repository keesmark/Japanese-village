function googleMap() {
	var latlng = new google.maps.LatLng(51.043436, -114.069190);/* 座標 */
	var myOptions = {
	zoom: 16, /*拡大比率*/
	center: latlng,
	mapTypeControlOptions: { mapTypeIds: ['style', google.maps.MapTypeId.ROADMAP] }
	};
	var map = new google.maps.Map(document.getElementById('map'), myOptions);

	/*アイコン設定*/
	var icon = new google.maps.MarkerImage('images/pin.png',/*画像url*/
	new google.maps.Size(70,84),/*アイコンサイズ*/
	new google.maps.Point(0,0)/*アイコン位置*/
	);
	var markerOptions = {
	position: latlng,
	map: map,
	icon: icon,
	title: 'Japanese village',/*タイトル*/
	animation: google.maps.Animation.DROP/*アニメーション*/
	};
	var marker = new google.maps.Marker(markerOptions);

	/*取得スタイルの貼り付け*/
	var styleOptions = [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#212121"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.country",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#9e9e9e"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.locality",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#bdbdbd"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.business",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#181818"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#1b1b1b"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#2c2c2c"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.icon",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8a8a8a"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#373737"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#3c3c3c"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#4e4e4e"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#616161"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "transit",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#757575"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#000000"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#3d3d3d"
	      }
	    ]
	  }
	]




	var styledMapOptions = { name: 'Japanese village' }/*地図右上のタイトル*/
	var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	map.mapTypes.set('style', sampleType);
	map.setMapTypeId('style');
	};
	google.maps.event.addDomListener(window, 'load', function() {
	googleMap();
});

window.addEventListener('load', function () {
   sliderStart();
});

function sliderStart() {

    const slide = document.getElementById('slide_wrapp');
    const slideItem = slide.querySelectorAll('.slide_item'); 
    const totalNum = slideItem.length - 1;
    const FadeTime = 2000;                           
    const IntarvalTime = 7000;                           
    let actNum = 0;                                    
    let nowSlide;                                              
    let NextSlide;

    slideItem[0].classList.add('show_', 'zoom_');

    setInterval(() => {
        if (actNum < totalNum) {

            let nowSlide = slideItem[actNum];
            let NextSlide = slideItem[++actNum];

            nowSlide.classList.remove('show_');
            NextSlide.classList.add('show_', 'zoom_');
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        } else {

            let nowSlide = slideItem[actNum];
            let NextSlide = slideItem[actNum = 0];

            nowSlide.classList.remove('show_');
            NextSlide.classList.add('show_', 'zoom_');
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        };
    }, IntarvalTime);

};
function updateButton() {
    if ($(this).scrollTop() >= 300) { 
        $(".top").fadeIn();
    } else {
        $(".top").fadeOut();
    }
}
$(function() {
    updateButton();
    $(window).scroll(updateButton);
    $(".top").click(function() {
        $("html, body").animate({
            scrollTop: 0,
        }, 600);
        return false;
    });
});
$(function(){
	$('#nav_toggle').click(function(){
		$("header").toggleClass('open');
		$("nav").fadeToggle(500);
	});
});

$(function(){
	$("#menu_nav").on("click", function() {
		$("#menu_nav ul").slideToggle();
	});
});
