function getPerson (i) {
  fetch("https://swapi.co/api/people/" + i + "/")
  .then(response =>
      response.json().then(data => ({
          person: data,
          status: response.status}))
  .then(res => {
    document.getElementById('content').innerHTML+=res.person.name+"<br/>"}));
}

function getPersons() {
  document.getElementById('content').innerHTML=""
  for (var i = 1; i <= 5; i++) {
    getPerson(i)
  }
}
