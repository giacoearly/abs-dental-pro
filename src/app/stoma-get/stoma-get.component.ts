import { MedicService } from './../medic.service';
import { Component, OnInit } from '@angular/core';
import { Medic } from '../PacientMedic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stoma-get',
  templateUrl: './stoma-get.component.html',
  styleUrls: ['./stoma-get.component.scss']
})
export class StomaGetComponent implements OnInit {
  medici: Medic[];

  constructor(private ms: MedicService, private router: Router) {}

  deleteMedic(id) {
    this.ms.deleteMedic(id).subscribe( res => {
    this.ngOnInit();
  });
  }
  
  ngOnInit() {
    this.ms
    .getMedici()
    .subscribe((data: Medic[]) => {
      this.medici = data;
    });
  }
}
