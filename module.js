var fs = require('fs');
var path = require('path');
var data = [];

module.exports = function (dir, extension, callback){
    fs.readdir(dir,function(err, list){
        if (!err){
            list.forEach(function(file){
                if (path.extname(file) == '.'+extension){
                    data.push(file);                    
                }
            });
            callback(null,data);
        }
        else
            callback(err);
    });
}


