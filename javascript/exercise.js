function getPerson (i) {
  var names = [];
  for (int i=1; i<6; i++){
    
  fetch("https://swapi.co/api/people/" + i + "/")
  .then(response =>
      response.json().then(data => ({
          person: data,
          status: response.status}))
  .then(res => {
    names.push(res.person.name);
    document.getElementById('content').innerHTML=res.person.name+","+ document.getElementById('content').innerHTLM}));
  }
}
