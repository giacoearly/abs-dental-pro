import { MedicService } from './../medic.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stoma-add',
  templateUrl: './stoma-add.component.html',
  styleUrls: ['./stoma-add.component.scss']
})
export class StomaAddComponent implements OnInit {
  medicForm: FormGroup;

  constructor(private fb: FormBuilder, private ms: MedicService, private router: Router) {
    this.createForm();
  }

    createForm() {
      this.medicForm = this.fb.group({
        NumeMedic: ['', Validators.required ],
        PrenumeMedic: ['', Validators.required ],
        Observatii: [''],
        Telefon: ['']
      });
    }

    addMedic(NumeMedic, PrenumeMedic, Telefon, Observatii) {
      this.ms.addMedic(NumeMedic, PrenumeMedic, Telefon, Observatii);
      this.router.navigate(['medici']);
    }

  ngOnInit() {
  }

}
