function initMap() {
    var uluru = {lat: 34.024512, lng: -117.853070};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

sr.reveal('.sr-container', { duration: 2000, scale: 1 });
sr.reveal('.content', { duration: 2000, scale: 1, delay: 1000 });
sr.reveal('.sr-btn', { duration: 2000, scale: 1, delay: 1000 });
sr.reveal('.geo-bg', { origin: 'right', duration: 2000, scale: 1, delay: 1000 });
sr.reveal('.alg-bg', { origin: 'left', duration: 2000, scale: 1, delay: 1000 });
sr.reveal('.sat-container', { origin: 'top', duration: 2000, scale: 1, delay: 1000 });
sr.reveal('.act-container', { origin: 'top', duration: 2000, scale: 0.5, delay: 1000 });
sr.reveal('.one-to-one', { origin: 'left', duration: 2000, scale: 1, delay: 500 }, 50);
sr.reveal('.contact-container', { origin: 'left', duration: 2000, scale: 1});