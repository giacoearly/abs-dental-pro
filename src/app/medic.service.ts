import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicService {
  uri = 'http://localhost:4000/medici';

  constructor(private http: HttpClient) { }

   addMedic(NumeMedic, PrenumeMedic, Telefon, Observatii) {
     const obj = {
       NumeMedic,
       PrenumeMedic,
       Telefon,
       Observatii
     };
     console.log(obj);
     this.http.post(`${this.uri}/add`, obj)
         .subscribe(res => console.log('Medic adaugat'));
   }


  getMedici() {
    return this
           .http
           .get(`${this.uri}`);
  }

  deleteMedic(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  editMedic(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

updateMedic(NumeMedic, PrenumeMedic, Telefon, Observatii, id) {
  const obj = {
    NumeMedic,
    PrenumeMedic,
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
