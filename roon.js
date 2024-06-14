let body = $response.body;
$httpClient.get('http://myip.ipip.net/ip', (err, _, data) => {
  if (err) {
    $done({});
    return;
  }
  $done({
    body: JSON.parse(data).ip,
  });
});
