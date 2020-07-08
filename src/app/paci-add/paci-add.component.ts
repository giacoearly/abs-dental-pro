import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientService } from '../pacient.service';

@Component({
  selector: 'app-paci-add',
  templateUrl: './paci-add.component.html',
  styleUrls: ['./paci-add.component.scss']
})
export class PaciAddComponent implements OnInit {
  paciForm: FormGroup;

  constructor(private fb: FormBuilder, private ps: PacientService, private router: Router) {
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
      CNP: ['', Validators.required ],
      Telefon: [''],
    });
  }

  addPacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP, Telefon, Observatii) {
    this.ps.addPacient(NumarFisa, Medic, NumePacient, PrenumePacient, SerieCI, NumarCI, CNP, Telefon, Observatii);
    this.router.navigate(['pacienti']);
  }

  ngOnInit() {
  }
}
