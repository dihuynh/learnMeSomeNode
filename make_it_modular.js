var module = require('./module.js');

module (process.argv[2], 
        process.argv[3], 
        function (err, data){
            if (err)
                console.log('Error is ' + err);
            else{
                data.forEach(function(file){
                    console.log(file);
                });
            }
        }
);
