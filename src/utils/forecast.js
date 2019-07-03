const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/ad2d2984c988b53b8c28bf097ef6befe/' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude)
    
    request({url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        }else if (body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, {
                forecast: 'The temperature is currently ' + body.currently.temperature + ', and the chance of rain is currently ' + body.currently.precipProbability + '%',
                cloudCover: 'The cloud cover is currently ' + body.currently.cloudCover + '%'
            })
        }
    })
}

module.exports = forecast