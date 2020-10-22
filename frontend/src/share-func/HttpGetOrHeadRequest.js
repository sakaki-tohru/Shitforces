async function HttpGetOrHeadRequest(fetchTo, method) {
  return JSON.parse(await fetch(fetchTo, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("サーバー接続の際にエラーが発生しました");
      }
      return response.text();
    }));
}
export default HttpGetOrHeadRequest;
