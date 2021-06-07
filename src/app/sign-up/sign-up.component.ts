import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, EmailValidator, Form} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { 
  }
  
  myForm! : FormGroup;
  pattern = "^[a-zA-Z0-9]{3,}[^a-zA-Z0-9]{1,}$";
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('',[Validators.email, Validators.required] ),
      Password : new FormControl('',[Validators.pattern(this.pattern), Validators.required]),
      ConfirmPassword : new FormControl('',[Validators.pattern(this.pattern), Validators.required]),
    });
    // if(this.myForm.controls.Password !== this.myForm.controls.ConfirmPassword){
    //   this.myForm.controls.ConfirmPassword.setErrors({passwordMismatch: true});
    // }
  }

  errorValidation(form: FormGroup){
    const comp = String(form.controls.Password.value).localeCompare(String(form.controls.ConfirmPassword.value));
    const len = String(form.controls.ConfirmPassword.value).length;
    const len1 = String(form.controls.Password.value).length;
    if((comp === 1 || comp === -1) && len !== 0){
      console.log(comp, len, len1, "T");
      return true;
    }
    else if(comp === 0 && len === len1){
      console.log(comp, len, len1, "F");
      return false;
    }
    else{
      console.log(comp, len, len1, "SF");
      return false;
    }
  }
  

 
  onSubmit(form : FormGroup){
    console.log(form.valid);
    console.log(form.value.name);
    console.log(form.value.ConfirmPassword);
    form.reset();
  }


}
