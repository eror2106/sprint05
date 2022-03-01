const countriesAPI = "https://restcountries.com/v3.1/all";
let population = [];
async function render() {
  fetch(countriesAPI)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // for (let index = 0; index < data.length; index++) {
      //   population.push(data[index].name.official);
      // }
      for (let j = 0; j < data.length; j++) {
        if (data[j].region == "Europe") {
          let html = document.getElementById("result");
          let li_pays = document.createElement("li");
          li_pays.textContent = data[j].name.official;
          html.appendChild(li_pays);
        }
      }
    });
}
