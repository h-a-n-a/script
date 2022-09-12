var body = $response.body;
var obj = JSON.parse(body);

obj['data']['nucleinState'] = "{\"detTime\":\"1\",\"detResult\":\"\"}";
body = JSON.stringify(obj);

console.log(body);

$done(body);
