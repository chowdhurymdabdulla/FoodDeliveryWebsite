import { Attribute, Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Directive({
  selector: '[appPassMatch][ngModel]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: PassMatchDirective,
    multi:true
  }]
})
export class PassMatchDirective implements Validator {

  constructor(@Attribute('appPassMatch') public pass:string) { }

  validate(control: AbstractControl){
    let cpass = control.value;
    let pass=control.root.get(this.pass)!.value ? control.root.get(this.pass)!.value : null;

    if(pass && cpass && pass !== cpass){
      return {missmatch:true}
    }
      else{
        return null;
      }
    
  }

}
