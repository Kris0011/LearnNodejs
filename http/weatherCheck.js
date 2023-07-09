let weather = require('./weather.es');
let location = 'INDIA' ;

weather.current(location , function(temp_f){
    console.log(temp_f);
})