import { PacientService } from './../pacient.service';
import { Pacient } from './../PacientMedic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paci-get',
  templateUrl: './paci-get.component.html',
  styleUrls: ['./paci-get.component.scss']
})
export class PaciGetComponent implements OnInit {
  pacienti: Pacient[];

  constructor(private ps: PacientService) {}

  ngOnInit() {
    this.ps
    .getPacienti()
    .subscribe((data: Pacient[]) => {
      this.pacienti = data;
    });
  }

deletePacient(id) {
      this.ps.deletePacient(id).subscribe( res => {
      this.ngOnInit();
    });
    }
}
