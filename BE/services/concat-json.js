var jsonConcat = require("json-concat");

jsonConcat({
    src: "BE/services",
    dest: "BE/services/data.json",
}, function(json){
    console.log(json);
});