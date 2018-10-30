function getPerson (i) {
  fetch("https://swapi.co/api/people/" + i + "/")
  .then(response =>
      response.json().then(data => ({
          person: data,
          status: response.status}))
  .then(res => {
    document.getElementById('content').innerHTML=res.person.name}));
}
