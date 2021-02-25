let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeISSLocationFetched = document.querySelector('#time')

let map = L.map('iss-map').setView([0,0],1)

let update = 10000
let issMarker
let issIcon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoib2JvbWlubnN0YXRlIiwiYSI6ImNrbGxnYTFpaDBsZmIyb21zOGIwMjc1d24ifQ.oPQfxdIfOFlHINY7vt6qFA'
}).addTo(map);

iss()
setInterval(iss, update)

function iss(){

    fetch(url).then( res => res.json() )
    .then ( (issData) => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
        } else {
            issMarker.setLatLng
        }

        let now = Date()
        timeISSLocationFetched.innerHTML = `This data was fetched at ${now}`
    }).catch( (err) => {
        console.log('ERROR!', err)
    })
}