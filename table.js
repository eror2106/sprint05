const countriesAPI = "https://restcountries.com/v3.1/region/europe";
async function render() {
  let serv = await fetch(countriesAPI);
  let pays = await serv.json();
  for (let j in pays) {
    let tableau = document.getElementById("result");
    let tr_personne = document.createElement("tr"); //parent
    let nom_pays = document.createElement("td"); //enfant
    let area = document.createElement("td"); //enfant
    let population = document.createElement("td"); //enfant
    let capital = document.createElement("td"); //enfant

    nom_pays.textContent = pays[j].name.official;
    area.textContent = nombre(pays[j].area);
    population.textContent = nombre(pays[j].population);
    capital.textContent = pays[j].capital;

    //ajout dan lhtml
    nom_pays.className = "d-sm-block fw-bolder text-nowrap";
    capital.className = "d-sm-block text-nowrap";
    area.className = "text-end";
    population.className = "text-end";
    tableau.appendChild(tr_personne);
    tr_personne.appendChild(nom_pays);
    tr_personne.appendChild(area);
    tr_personne.appendChild(population);
    tr_personne.appendChild(capital);
  }
}
render();

function nombre(nb) {
  let lol = nb.toString();
  let tour = 0;
  let result = "";
  if (lol.includes(".") == true) {
    return lol;
  }
  for (let index = lol.length - 1; index >= 0; index--) {
    if (tour == 2) {
      result += lol[index] + ",";
      tour = -1;
    } else {
      result += lol[index];
    }
    tour++;
  }

  return reverseString(result);
}

function reverseString(str) {
  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  if (newString.charAt(0) == ",") {
    newString = newString.replace(",", "");
  }

  return newString;
}
