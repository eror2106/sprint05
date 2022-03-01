const countriesAPI = "https://restcountries.com/v3.1/all";
let population = [];
async function render() {
  fetch(countriesAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].region == "Europe") {
          console.log(data[j]);
          let html = document.getElementById("result");
          let li_pays = document.createElement("li");
          li_pays.textContent = data[j].name.official;
          html.appendChild(li_pays);
        }
      }
    });
}
