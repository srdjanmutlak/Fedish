var Instruktor = /** @class */ (function () {
    function Instruktor(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        /**
         * Getter ime
         * @return {string}
         */
        get: function () {
            return this._ime;
        },
        /**
         * Setter ime
         * @param {string} value
         */
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        /**
         * Getter prezime
         * @return {string}
         */
        get: function () {
            return this._prezime;
        },
        /**
         * Setter prezime
         * @param {string} value
         */
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        /**
         * Getter jmbg
         * @return {number}
         */
        get: function () {
            return this._jmbg;
        },
        /**
         * Setter jmbg
         * @param {number} value
         */
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: false,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        /**
         * Getter instruktor
         * @return {Instruktor}
         */
        get: function () {
            return this._instruktor;
        },
        /**
         * Setter instruktor
         * @param {Instruktor} value
         */
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        /**
         * Getter imeKandidata
         * @return {string}
         */
        get: function () {
            return this._imeKandidata;
        },
        /**
         * Setter imeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        /**
         * Getter prezimeKandidata
         * @return {string}
         */
        get: function () {
            return this._prezimeKandidata;
        },
        /**
         * Setter prezimeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        /**
         * Getter nacinPolaganja
         * @return {string}
         */
        get: function () {
            return this._nacinPolaganja;
        },
        /**
         * Setter nacinPolaganja
         * @param {string} value
         */
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: false,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(naziv) {
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        /**
         * Getter instruktori
         * @return {Instruktor[]}
         */
        get: function () {
            return this._instruktori;
        },
        /**
         * Setter instruktori
         * @param {Instruktor[]} value
         */
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        /**
         * Getter ispiti
         * @return {Ispit[]}
         */
        get: function () {
            return this._ispiti;
        },
        /**
         * Setter ispiti
         * @param {Ispit[]} value
         */
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: false,
        configurable: true
    });
    AutoSkola.prototype.dodajIspit = function (value) {
        this._ispiti.push(value);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var tabelaZaIspis = document.getElementById("tbody");
        var output = "<tr>";
        autoSkola._ispiti.forEach(function (el, index) {
            output += "<td> ".concat(index + 1, " </td>");
            output += "<td> ".concat(el.imeKandidata, " ").concat(el.prezimeKandidata, " </td>");
            output += "<td> ".concat(el.instruktor.ime, " ").concat(el.instruktor.prezime, " </td>");
            output += "<td> ".concat(el.nacinPolaganja, " </td>");
            output += "<td> ".concat(el.datum, " </td>");
            if (el.brojBodova > 55) {
                output += "<td class='green'> ".concat(el.brojBodova, " </td>");
            }
            else {
                output += "<td class='red'> ".concat(el.brojBodova, " </td>");
            }
            output += "</tr>";
            output += "</table>";
        });
        tabelaZaIspis.innerHTML = output;
    };
    AutoSkola.prototype.izracunajProlaznostZaInstruktora = function (nacinPolaganja, instruktor) {
        var divZaIspis = document.getElementById("podaci");
        var nizIspita = autoSkola._ispiti.filter(function (el) {
            return el.instruktor.jmbg === instruktor.jmbg &&
                el.nacinPolaganja == nacinPolaganja;
        });
        var nizPolozenihIspita = nizIspita.filter(function (el) { return el.brojBodova > 55; });
        var procenatProlaznosti = (nizPolozenihIspita.length * 100) / nizIspita.length;
        console.log(nizIspita.length);
        console.log(nizPolozenihIspita.length);
        console.log(procenatProlaznosti);
        divZaIspis.innerHTML = "<h3>Prolaznost za \"".concat(nacinPolaganja, "\" kod instruktora \"").concat(instruktor.ime, " ").concat(instruktor.prezime, "\" je ").concat(procenatProlaznosti.toFixed(0), "%.</h3>");
    };
    AutoSkola.prototype.najboljiInstruktoriPoNacinuPolaganja = function () {
        var nizInstruktora = autoSkola._instruktori.map(function (el) { return el; });
        // Pravi objekta gde ce key  biti JMBG a vrednost broj polozenih ispita. Posebno za teoriju posebn za praksu
        var brojPolozenihTeorija = {};
        nizInstruktora.forEach(function (instruktor) {
            var brojPolozenih = 0;
            autoSkola.ispiti.forEach(function (ispit) {
                if (ispit.nacinPolaganja === "Teorija" &&
                    ispit.brojBodova > 55 &&
                    ispit.instruktor === instruktor) {
                    brojPolozenih++;
                }
            });
            brojPolozenihTeorija[instruktor.jmbg] = brojPolozenih;
        });
        var brojPolozenihPrakticno = {};
        nizInstruktora.forEach(function (instruktor) {
            var brojPolozenih = 0;
            autoSkola.ispiti.forEach(function (ispit) {
                if (ispit.nacinPolaganja === "Prakticno" &&
                    ispit.brojBodova > 55 &&
                    ispit.instruktor === instruktor) {
                    brojPolozenih++;
                }
            });
            brojPolozenihPrakticno[instruktor.jmbg] = brojPolozenih;
        });
        //Trazi jmbg koji ima najvise polozenih ispita u teoriji odnosno praksi
        var najviseTeorija = Object.keys(brojPolozenihTeorija).reduce(function (preVal, el) {
            if (brojPolozenihTeorija[preVal] > brojPolozenihTeorija[el]) {
                return preVal;
            }
            else {
                return el;
            }
        });
        var najvisePraksa = Object.keys(brojPolozenihPrakticno).reduce(function (preVal, el) {
            if (brojPolozenihPrakticno[preVal] > brojPolozenihPrakticno[el]) {
                return preVal;
            }
            else {
                return el;
            }
        });
        //Vadi konkretan broj polozenih ispita(vrednost za key) za teoriju i praksu
        var brojTeorija = 0;
        for (var key in brojPolozenihTeorija) {
            if (key == najviseTeorija) {
                brojTeorija = brojPolozenihTeorija[key];
            }
        }
        var brojPraksa = 0;
        for (var key in brojPolozenihPrakticno) {
            if (key == najvisePraksa) {
                brojPraksa = brojPolozenihPrakticno[key];
            }
        }
        //Pronalazi objekat Instruktor po jmbg-u
        var najbojiInstruktorTeorija = this.instruktori.filter(function (el) { return el.jmbg == Number(najviseTeorija); });
        var najbojiInstruktorPraksa = this.instruktori.filter(function (el) { return el.jmbg == Number(najvisePraksa); });
        document.getElementById("podaci").innerHTML = "\n    <h3>Instruktor sa najboljom prolaznosti za teoriju je ".concat(najbojiInstruktorTeorija[0].ime, " ").concat(najbojiInstruktorTeorija[0].prezime, " sa ukupno polozenih ").concat(brojTeorija, " testova.</h3>\n\t\t\t<br>\n            <h3>Instruktor sa najboljom prolaznosti za prakticno je  ").concat(najbojiInstruktorPraksa[0].ime, " ").concat(najbojiInstruktorPraksa[0].prezime, " sa ukupno polozenih ").concat(brojPraksa, ".</h3>\n\t\t\t");
    };
    AutoSkola.prototype.zavrsenaObuka = function (instruktor) {
        var filtriraniIspiti = this._ispiti.filter(function (el) {
            return el.instruktor.jmbg === instruktor.jmbg;
        });
        var polozeni = {};
        filtriraniIspiti.map(function (el) {
            //obrnuta logika
            if (el.imeKandidata + el.prezimeKandidata in polozeni) {
                polozeni[el.imeKandidata + el.prezimeKandidata].push(el.brojBodova);
                //ako ne postoji key sa imenom i prezimenom dodaje se, i u vrednost mu se smesta
                //NIZ u koji se upisuje broj bodova. Pri narednom prolazenju  ako se
                //pronadje kandidat sa istim imenom i prezimenom, bodovi se dodaju u napravljeni
                //niz
            }
            else {
                polozeni[el.imeKandidata + el.prezimeKandidata] = [el.brojBodova];
            }
        });
        for (var x in polozeni) {
            if (polozeni[x][0] < 55 || polozeni[x][1] < 55) {
                delete polozeni[x];
            }
        }
        var tabela = document.getElementById("tbody");
        var res = "";
        filtriraniIspiti.forEach(function (el, index) {
            if (el.imeKandidata + el.prezimeKandidata in polozeni) {
                var newRow = "<tr>";
                newRow += "<td>".concat(index + 1, "</td>");
                newRow += "<td>".concat(el.imeKandidata, " ").concat(el.prezimeKandidata, "</td>");
                newRow += "<td>".concat(el.instruktor.ime, " ").concat(el.instruktor.prezime, "</td>");
                newRow += "<td>".concat(el.nacinPolaganja, "</td>");
                newRow += "<td>".concat(el.datum, "</td>");
                newRow += "<td class=\"green\">".concat(el.brojBodova, "</td>");
                newRow += "</tr>";
                res += newRow;
            }
        });
        tabela.innerHTML = res;
    };
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    //Dodaj ispit
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var instruktorJmbg = Number(document.getElementById("instruktor").value);
        var instruktor = nadjiInstruktoraPoJmbg(instruktorJmbg);
        var imeKandidata = document.getElementById("ime")
            .value;
        var prezimeKandidata = document.getElementById("prezime").value;
        var datumPolaganja = document.getElementById("datum")
            .value;
        var brojBodovaTeorija = Number(document.getElementById("teorija").value);
        var brojBodovaPrakticni = Number(document.getElementById("prakticno").value);
        var teorija = new Ispit(instruktor, imeKandidata, prezimeKandidata, "Teorija", datumPolaganja, brojBodovaTeorija);
        var prakticni = new Ispit(instruktor, imeKandidata, prezimeKandidata, "Prakticno", datumPolaganja, brojBodovaPrakticni);
        autoSkola.dodajIspit(teorija);
        autoSkola.dodajIspit(prakticni);
        autoSkola.refreshIspis();
    });
    //Izracunaj prolaznost za instruktora po nacinu polaganja
    document
        .getElementById("izracunajProlaznostZaInstruktora")
        .addEventListener("click", function () {
        var instruktorJmbg = Number(document.getElementById("instruktor").value);
        var instruktor = nadjiInstruktoraPoJmbg(instruktorJmbg);
        var nacinPolaganja = document.getElementById("nacinPolaganjaSelekt").value;
        autoSkola.izracunajProlaznostZaInstruktora(nacinPolaganja, instruktor);
    });
    //najbolji instruktor
    document
        .getElementById("najboljiInstruktoriPoNacinuPolaganja")
        .addEventListener("click", function () {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    });
    //zavrsena obuka
    document.getElementById("zavrsnaObuka").addEventListener("click", function () {
        autoSkola.zavrsenaObuka(aktivanInstruktor);
    });
}
function nadjiInstruktoraPoJmbg(jmbg) {
    var nizInstruktora = autoSkola.instruktori.filter(function (el) { return el.jmbg == jmbg; });
    return nizInstruktora[0];
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
//OVAJ KOD OSTAVITI NA DNU STRANICE
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Jovan", "Jovanovic", "Teorija", "2018-02-11", 35);
    var i12 = new Ispit(is1, "Jovan", "Jovanovic", "Prakticno", "2018-03-05", 78);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", "Teorija", "2018-05-09", 89);
    var i22 = new Ispit(is1, "Ivan", "Ivanovic", "Prakticno", "2018-07-21", 95);
    var i31 = new Ispit(is1, "Dejan", "Dejan", "Teorija", "2018-05-09", 48);
    var i32 = new Ispit(is1, "Dejan", "Dejan", "Prakticno", "2018-07-21", 98);
    var i41 = new Ispit(is2, "Marko", "Markovic", "Teorija", "2018-02-11", 85);
    var i42 = new Ispit(is2, "Marko", "Markovic", "Prakticno", "2018-03-05", 94);
    var i51 = new Ispit(is2, "Nikola", "Nikolic", "Teorija", "2018-05-09", 67);
    var i52 = new Ispit(is2, "Nikola", "Nikolic", "Prakticno", "2018-07-21", 23);
    var i61 = new Ispit(is2, "Luka", "Lukic", "Teorija", "2018-05-09", 83);
    var i62 = new Ispit(is2, "Luka", "Lukic", "Prakticno", "2018-07-21", 51);
    var i71 = new Ispit(is3, "Djordje", "Djordjevic", "Teorija", "2018-02-11", 85);
    var i72 = new Ispit(is3, "Djordje", "Djordjevic", "Prakticno", "2018-03-05", 94);
    var i81 = new Ispit(is3, "Branko", "Brankovic", "Teorija", "2018-05-09", 41);
    var i82 = new Ispit(is3, "Branko", "Brankovic", "Prakticno", "2018-07-21", 21);
    var i91 = new Ispit(is3, "Ognjen", "Ognjenovic", "Teorija", "2018-05-09", 45);
    var i92 = new Ispit(is3, "Ognjen", "Ognjenovic", "Prakticno", "2018-07-21", 55);
    var i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Teorija", "2018-05-09", 97);
    var i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Prakticno", "2018-07-21", 99);
    var i111 = new Ispit(is3, "Vladimir", "Vladimirovic", "Teorija", "2018-05-09", 54);
    var i112 = new Ispit(is3, "Vladimir", "Vladimirovic", "Prakticno", "2018-07-21", 17);
    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    autoSkola.dodajIspit(i41);
    autoSkola.dodajIspit(i42);
    autoSkola.dodajIspit(i51);
    autoSkola.dodajIspit(i52);
    autoSkola.dodajIspit(i61);
    autoSkola.dodajIspit(i62);
    autoSkola.dodajIspit(i71);
    autoSkola.dodajIspit(i72);
    autoSkola.dodajIspit(i81);
    autoSkola.dodajIspit(i82);
    autoSkola.dodajIspit(i91);
    autoSkola.dodajIspit(i92);
    autoSkola.dodajIspit(i101);
    autoSkola.dodajIspit(i102);
    autoSkola.dodajIspit(i111);
    autoSkola.dodajIspit(i112);
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map