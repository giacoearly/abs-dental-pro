import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientService {
  uri = 'http://localhost:4000/pacienti';

   constructor(private http: HttpClient) { }

  addPacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP, Telefon, Observatii) {
    const obj = {
      NumarFisa,
      Medic,
      NumePacient,
      PrenumePacient,
      SerieCI,
      NumarCI,
      CNP,
      Telefon,
      Observatii
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Pacient adaugat'));
  }


  getPacienti() {
    return this
           .http
           .get(`${this.uri}`);
  }

  deletePacient(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  editPacient(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }


updatePacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP, Telefon, Observatii, id) {
  const obj = {
    NumarFisa,
    Medic,
    NumePacient,
    PrenumePacient,
    SerieCI,
    NumarCI,
    CNP,
    Telefon,
    Observatii
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => {
      // this.router
      console.log('Done');});
  }
}
