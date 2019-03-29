'use strict'
$(document).ready(function () {
            $.ajax({url: 'https://www.metaweather.com/api/location/search/?query=san',
                    success: function (result) {
                            let arrayG = [];
                            let temperaturame = [];
                            let media = 0;
                            let humedad;
                            let i, x;

                        function recorrer() {
                                if (result.length > 0) {

                                    // Llamada se obtienen por ciudad
                                    $.ajax({
                                            url: "https://www.metaweather.com/api/location/" + result.shift().woeid + "/",
                                            success: function (city) {
                                                arrayG.push(city)

                                                // for ( i=0; i<=city.consolidated_weather.length; i++){                      
                                                //     console.log(city.consolidated_weather[i].humidity)
                                                // }

                                                arrayG.forEach(function (item, index, arrayG) {
                                                        console.log(item, index);

                                                    }
                                                };

                                                recorrer();

                                            }
                                            recorrer();

                                        }
                                    });
                            });