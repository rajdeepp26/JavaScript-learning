var person = {
    "name":"Ram",
    "age":27,
    "vehicles": {
       "car":"limousine",
       "bike":"ktm-duke",
       "airlines":{
          "lufthansa" : "Air123",
           "British airways" : "Brt707"
       }
    }
 }

function getKeyValues(data) {
    var q = [];
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = data[key];
        if (value == null) {
            q.push(key + "=''");
        } else if (typeof value == "object") {
            q.push(getKeyValues(value));
        } else {
            q.push(key + "=" + value);
        }
    }
    return q.join(",");
}
let ans = getKeyValues(person);
console.log(ans);

// Output : name=Ram,age=27,car=limousine,bike=ktm-duke,lufthansa=Air123,British airways=Brt707