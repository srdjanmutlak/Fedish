var boje = {
  rucak: "Crimson",
  pice: "Teal",
};

var osobe = [
  { ime: "Pera", prezime: "Peric" },
  { ime: "Marko", prezime: "Markovic" },
  { ime: "Jovo", prezime: "Jovic" },
];

function proveraForme(forma) {
  let retVal = true;

  if (
    forma.ime.value.trim() == "" ||
    forma.ime.value.trim().charAt(0) !=
      forma.ime.value.trim().charAt(0).toUpperCase()
  ) {
    retVal = false;
  }

  if (
    forma.prezime.value.trim() == "" ||
    forma.prezime.value.trim().charAt(0) !=
      forma.prezime.value.trim().charAt(0).toUpperCase()
  ) {
    retVal = false;
  }

  let niz = osobe.filter(
    (el) =>
      el.ime == forma.ime.value.trim() &&
      el.prezime == forma.prezime.value.trim()
  );
  if (niz.length == 0) {
    retVal = false;
  }

  return retVal;
}

function promenaPremiuma(premium) {
  let selekt = document.getElementById("sel1");
  let skriveniSelekt = document.getElementById("sel2");
  let spanZaIspis = document.getElementById("poruka");
  let paragraf = document.getElementById("select_paragraf");
  let btn = document.getElementById("submitbtn");

  //premium checkbox
  if (premium.checked) {
    selekt.disabled = false;
    promenaClanstva(selekt);
  } else {
    selekt.disabled = true;
    skriveniSelekt.style.visibility = "hidden";
    skriveniSelekt.disabled = true;
    spanZaIspis.innerHTML = "";
    paragraf.style.backgroundColor = "";
    btn.style.backgroundColor = "";
  }
}

//vrsta clanstava - 3= platina
function promenaClanstva(selekt) {
  let skriveniSelekt = document.getElementById("sel2");
  let spanZaIspis = document.getElementById("poruka");
  let paragraf = document.getElementById("select_paragraf");
  let btn = document.getElementById("submitbtn");

  if (selekt.value == 3) {
    skriveniSelekt.style.visibility = "visible";
    skriveniSelekt.disabled = false;
    ispisPremium(skriveniSelekt);
  } else {
    skriveniSelekt.style.visibility = "hidden";
    skriveniSelekt.disabled = true;
    spanZaIspis.innerHTML = "";
    paragraf.style.backgroundColor = "";
    btn.style.backgroundColor = "";
  }
}

function ispisPremium(selekt) {
  let spanZaIspis = document.getElementById("poruka");
  let paragraf = document.getElementById("select_paragraf");
  let btn = document.getElementById("submitbtn");

  if (selekt.value == "rucak") {
    spanZaIspis.innerHTML = "Rucak";
    paragraf.style.backgroundColor = boje.rucak;
    btn.style.backgroundColor = boje.rucak;
  } else {
    spanZaIspis.innerHTML = "Pice";
    paragraf.style.backgroundColor = boje.pice;
    btn.style.backgroundColor = boje.pice;
  }
}
