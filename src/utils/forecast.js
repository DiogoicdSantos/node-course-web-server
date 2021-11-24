require("dotenv").config();
const request = require("request");
const weatherstackkey = process.env.WEATHERSTACK_KEY;

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    weatherstackkey +
    "&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=m";

  request({ url, json: true }, (error, { response, body } = {}) => {
    if (error) {
      callback("Unable to connect to the service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
