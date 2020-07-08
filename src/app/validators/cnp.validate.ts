import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ValidateCNP(len: number):ValidatorFn  {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value.length != len) {
      return { invalidCNP: true };
    }
    return null;
  }
  }  
