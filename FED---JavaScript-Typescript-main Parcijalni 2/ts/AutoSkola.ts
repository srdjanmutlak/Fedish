/// <reference path="Ispit.ts" />

class AutoSkola {
  private _naziv: string;
  private _instruktori: Instruktor[];
  private _ispiti: Ispit[];

  constructor(naziv: string) {
    this._naziv = naziv;
    this._instruktori = [];
    this._ispiti = [];
  }

  /**
   * Getter naziv
   * @return {string}
   */
  public get naziv(): string {
    return this._naziv;
  }

  /**
   * Setter naziv
   * @param {string} value
   */
  public set naziv(value: string) {
    this._naziv = value;
  }

  /**
   * Getter instruktori
   * @return {Instruktor[]}
   */
  public get instruktori(): Instruktor[] {
    return this._instruktori;
  }

  /**
   * Setter instruktori
   * @param {Instruktor[]} value
   */
  public set instruktori(value: Instruktor[]) {
    this._instruktori = value;
  }

  /**
   * Getter ispiti
   * @return {Ispit[]}
   */
  public get ispiti(): Ispit[] {
    return this._ispiti;
  }

  /**
   * Setter ispiti
   * @param {Ispit[]} value
   */
  public set ispiti(value: Ispit[]) {
    this._ispiti = value;
  }

  dodajIspit(value: Ispit) {
    this._ispiti.push(value);
  }

  refreshIspis(): void {
    let tabelaZaIspis: HTMLElement = document.getElementById("tbody");
    let output: string = `<tr>`;
    autoSkola._ispiti.forEach((el, index) => {
      output += `<td> ${index + 1} </td>`;
      output += `<td> ${el.imeKandidata} ${el.prezimeKandidata} </td>`;
      output += `<td> ${el.instruktor.ime} ${el.instruktor.prezime} </td>`;
      output += `<td> ${el.nacinPolaganja} </td>`;
      output += `<td> ${el.datum} </td>`;
      if (el.brojBodova > 55) {
        output += `<td class='green'> ${el.brojBodova} </td>`;
      } else {
        output += `<td class='red'> ${el.brojBodova} </td>`;
      }
      output += `</tr>`;
      output += `</table>`;
    });

    tabelaZaIspis.innerHTML = output;
  }

  izracunajProlaznostZaInstruktora(
    nacinPolaganja: string,
    instruktor: Instruktor
  ): void {
    let divZaIspis = document.getElementById("podaci");
    let nizIspita = autoSkola._ispiti.filter(
      (el) =>
        el.instruktor.jmbg === instruktor.jmbg &&
        el.nacinPolaganja == nacinPolaganja
    );

    let nizPolozenihIspita = nizIspita.filter((el) => el.brojBodova > 55);

    let procenatProlaznosti =
      (nizPolozenihIspita.length * 100) / nizIspita.length;

    console.log(nizIspita.length);
    console.log(nizPolozenihIspita.length);
    console.log(procenatProlaznosti);

    divZaIspis.innerHTML = `<h3>Prolaznost za "${nacinPolaganja}" kod instruktora "${
      instruktor.ime
    } ${instruktor.prezime}" je ${procenatProlaznosti.toFixed(0)}%.</h3>`;
  }

  najboljiInstruktoriPoNacinuPolaganja(): void {
    let nizInstruktora = autoSkola._instruktori.map((el) => el);

    // Pravi objekta gde ce key  biti JMBG a vrednost broj polozenih ispita. Posebno za teoriju posebn za praksu

    let brojPolozenihTeorija = {};
    nizInstruktora.forEach((instruktor) => {
      let brojPolozenih: number = 0;
      autoSkola.ispiti.forEach((ispit) => {
        if (
          ispit.nacinPolaganja === "Teorija" &&
          ispit.brojBodova > 55 &&
          ispit.instruktor === instruktor
        ) {
          brojPolozenih++;
        }
      });
      brojPolozenihTeorija[instruktor.jmbg] = brojPolozenih;
    });

    let brojPolozenihPrakticno = {};
    nizInstruktora.forEach((instruktor) => {
      let brojPolozenih: number = 0;
      autoSkola.ispiti.forEach((ispit) => {
        if (
          ispit.nacinPolaganja === "Prakticno" &&
          ispit.brojBodova > 55 &&
          ispit.instruktor === instruktor
        ) {
          brojPolozenih++;
        }
      });
      brojPolozenihPrakticno[instruktor.jmbg] = brojPolozenih;
    });

    //Trazi jmbg koji ima najvise polozenih ispita u teoriji odnosno praksi

    let najviseTeorija = Object.keys(brojPolozenihTeorija).reduce(
      (preVal, el) => {
        if (brojPolozenihTeorija[preVal] > brojPolozenihTeorija[el]) {
          return preVal;
        } else {
          return el;
        }
      }
    );

    let najvisePraksa = Object.keys(brojPolozenihPrakticno).reduce(
      (preVal, el) => {
        if (brojPolozenihPrakticno[preVal] > brojPolozenihPrakticno[el]) {
          return preVal;
        } else {
          return el;
        }
      }
    );

    //Vadi konkretan broj polozenih ispita(vrednost za key) za teoriju i praksu

    let brojTeorija = 0;
    for (const key in brojPolozenihTeorija) {
      if (key == najviseTeorija) {
        brojTeorija = brojPolozenihTeorija[key];
      }
    }

    let brojPraksa = 0;
    for (const key in brojPolozenihPrakticno) {
      if (key == najvisePraksa) {
        brojPraksa = brojPolozenihPrakticno[key];
      }
    }

    //Pronalazi objekat Instruktor po jmbg-u
    let najbojiInstruktorTeorija = this.instruktori.filter(
      (el) => el.jmbg == Number(najviseTeorija)
    );
    let najbojiInstruktorPraksa = this.instruktori.filter(
      (el) => el.jmbg == Number(najvisePraksa)
    );

    document.getElementById("podaci").innerHTML = `
    <h3>Instruktor sa najboljom prolaznosti za teoriju je ${najbojiInstruktorTeorija[0].ime} ${najbojiInstruktorTeorija[0].prezime} sa ukupno polozenih ${brojTeorija} testova.</h3>
			<br>
            <h3>Instruktor sa najboljom prolaznosti za prakticno je  ${najbojiInstruktorPraksa[0].ime} ${najbojiInstruktorPraksa[0].prezime} sa ukupno polozenih ${brojPraksa}.</h3>
			`;
  }

  zavrsenaObuka(instruktor: Instruktor) {
    const filtriraniIspiti = this._ispiti.filter((el) => {
      return el.instruktor.jmbg === instruktor.jmbg;
    });
    const polozeni = {};
    filtriraniIspiti.map((el) => {
      //obrnuta logika
      if (el.imeKandidata + el.prezimeKandidata in polozeni) {
        polozeni[el.imeKandidata + el.prezimeKandidata].push(el.brojBodova);

        //ako ne postoji key sa imenom i prezimenom dodaje se, i u vrednost mu se smesta
        //NIZ u koji se upisuje broj bodova. Pri narednom prolazenju  ako se
        //pronadje kandidat sa istim imenom i prezimenom, bodovi se dodaju u napravljeni
        //niz
      } else {
        polozeni[el.imeKandidata + el.prezimeKandidata] = [el.brojBodova];
      }
    });
    for (let x in polozeni) {
      if (polozeni[x][0] < 55 || polozeni[x][1] < 55) {
        delete polozeni[x];
      }
    }
    const tabela = document.getElementById("tbody");
    let res = "";
    filtriraniIspiti.forEach((el, index) => {
      if (el.imeKandidata + el.prezimeKandidata in polozeni) {
        let newRow = "<tr>";
        newRow += `<td>${index + 1}</td>`;
        newRow += `<td>${el.imeKandidata} ${el.prezimeKandidata}</td>`;
        newRow += `<td>${el.instruktor.ime} ${el.instruktor.prezime}</td>`;
        newRow += `<td>${el.nacinPolaganja}</td>`;
        newRow += `<td>${el.datum}</td>`;

        newRow += `<td class="green">${el.brojBodova}</td>`;

        newRow += "</tr>";
        res += newRow;
      }
    });
    tabela.innerHTML = res;
  }
}
