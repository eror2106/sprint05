const countriesAPI = "https://restcountries.com/v3.1/region/europe";
async function render() {
  let serv = await fetch(countriesAPI);
  let pays = await serv.json();
  for (let j in pays) {
    document.getElementById(
      "result"
    ).innerHTML += `<li>${pays[j].name.official}</li>`;
  }

  // .then(function (res) {
  //   return res.json();
  // })
  // .then(function (data) {
  //   for (let j = 0; j < data.length; j++) {
  //     if (data[j].region == "Europe") {
  //       console.log(data[j]);
  //       let html = document.getElementById("result");
  //       let li_pays = document.createElement("li");
  //       li_pays.textContent = data[j].name.official;
  //       html.appendChild(li_pays);
  //     }
  //   }
  // })
  // .catch(function (err) {
  //   console.log(err);
  // });
}
render();
