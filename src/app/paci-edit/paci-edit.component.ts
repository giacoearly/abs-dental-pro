import { PacientService } from './../pacient.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacient } from '../PacientMedic';

@Component({
  selector: 'app-paci-edit',
  templateUrl: './paci-edit.component.html',
  styleUrls: ['./paci-edit.component.scss']
})
export class PaciEditComponent implements OnInit {

  paciForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private ps: PacientService, private fb: FormBuilder ) {
      this.createForm();
 }

  createForm() {
    this.paciForm = this.fb.group({
      NumarFisa: ['', Validators.required ],
      Medic: ['', Validators.required ],
      Observatii: [''],
      NumePacient: ['', Validators.required ],
      PrenumePacient: ['', Validators.required ],
      SerieCI: ['', Validators.required ],
      NumarCI: ['', Validators.required ],
      CNP: ['', Validators.required],
      Telefon: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editPacient(params['id']).subscribe(res => {
          let pacient = res as Pacient;
          this.paciForm.get('NumarFisa').setValue(pacient.NumarFisa);
          this.paciForm.get('Medic').setValue(pacient.Medic);
          this.paciForm.get('NumePacient').setValue(pacient.NumePacient);
          this.paciForm.get('PrenumePacient').setValue(pacient.PrenumePacient);
          this.paciForm.get('SerieCI').setValue(pacient.SerieCI);
          this.paciForm.get('NumarCI').setValue(pacient.NumarCI);
          this.paciForm.get('CNP').setValue(pacient.CNP);
          this.paciForm.get('Telefon').setValue(pacient.Telefon);
          this.paciForm.get('Observatii').setValue(pacient.Observatii);
      });
    });
  }


  updatePacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP, Telefon, Observatii, id) {
    this.route.params.subscribe(params => {
      this.ps.updatePacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP,
                            Telefon, Observatii, params.id);
      this.router.navigate(['pacienti']);
  });
}
}
