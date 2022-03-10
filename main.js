//const countriesAPI = "https://restcountries.com/v3.1/region/europe";
async function render() {
  /*let serv = await fetch(countriesAPI);
  let pays = await serv.json();
  for (let j in pays) {
    document.getElementById(
      "result"
    ).innerHTML += `<li>${pays[j].name.official}</li>`;
  }*/

  let pays;

  try {
    const serv = await fetch("https://restcountries.com/v3.1/region/europe");
    if (serv.status == 404) {
      document.getElementById("erreur").innerHTML =
        "un soucis a été detecté avec l'api";
    }

    pays = await serv.json();
    for (let j in pays) {
      document.getElementById(
        "result"
      ).innerHTML += `<li>${pays[j].name.official}</li>`;
    }
  } catch (error) {
    let btn = document.getElementById("err");
    btn.innerHTML =
      "<button type=button class=btn-warning >" + "Reload" + "</button>";
    btn.setAttribute("onclick", "clic()");
    console.error("dans le catch", error);

    document.getElementById("erreur").innerHTML =
      "un soucis a été detecté avec l'api";
  }
}
render();

function clic() {
  location.reload();
}
