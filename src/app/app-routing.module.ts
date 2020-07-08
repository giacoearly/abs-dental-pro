import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StomaAddComponent } from './stoma-add/stoma-add.component';
import { StomaEditComponent } from './stoma-edit/stoma-edit.component';
import { StomaGetComponent } from './stoma-get/stoma-get.component';
import { PaciAddComponent } from './paci-add/paci-add.component';
import { PaciEditComponent } from './paci-edit/paci-edit.component';
import { PaciGetComponent } from './paci-get/paci-get.component';


const routes: Routes = [
  {
    path: 'medic/adauga',
    component: StomaAddComponent
  },
  {
    path: 'medici/modifica/:id',
    component: StomaEditComponent
  },
  {
    path: 'medici',
    component: StomaGetComponent
  },
  {
    path: 'pacient/adauga',
    component: PaciAddComponent
  },
  {
    path: 'pacienti/modifica/:id',
    component: PaciEditComponent
  },
  {
    path: 'pacienti',
    component: PaciGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
