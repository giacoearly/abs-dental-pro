import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MedicService } from '../medic.service';
import { Medic } from '../PacientMedic';

@Component({
  selector: 'app-stoma-edit',
  templateUrl: './stoma-edit.component.html',
  styleUrls: ['./stoma-edit.component.scss']
})
export class StomaEditComponent implements OnInit {

    stomaForm: FormGroup;

    constructor(private route: ActivatedRoute, private router: Router, private ms: MedicService, private fb: FormBuilder ) {
        this.createForm();
   }

    createForm() {
      this.stomaForm = this.fb.group({
        NumeMedic: ['', Validators.required ],
        PrenumeMedic: ['', Validators.required ],
        Observatii: [''],
        Telefon: [''],
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
          this.ms.editMedic(params['id']).subscribe(res => {
            let medic = res as Medic;
            this.stomaForm.get('NumeMedic').setValue(medic.NumeMedic);
            this.stomaForm.get('PrenumeMedic').setValue(medic.PrenumeMedic);
            this.stomaForm.get('Telefon').setValue(medic.Telefon);
            this.stomaForm.get('Observatii').setValue(medic.Observatii);
        });
      });
    }


    updateMedic(NumeMedic, PrenumeMedic, Telefon, Observatii, id) {
      this.route.params.subscribe(params => {
        this.ms.updateMedic(NumeMedic, PrenumeMedic, Telefon, Observatii, params.id);
        this.router.navigate(['medici']);
    });
  }
  }
