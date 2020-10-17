async function HttpRequest(fetchTo, body, method) {
  return JSON.parse(await fetch(fetchTo, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("サーバー接続の際にエラーが発生しました");
      }
      return response.text();
    }));
}
export default HttpRequest;
