const handleFetchCreate = (data) => {
  return fetch("https://dev.adalab.es/api/projectCard", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export default handleFetchCreate;
