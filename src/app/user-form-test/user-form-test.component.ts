import { Component, OnInit } from '@angular/core';
import { MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-test',
  templateUrl: './user-form-test.component.html',
  styleUrls: ['./user-form-test.component.css']
})
export class UserFormTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pTagi = "";
  submitUserForm(form){
    if(form.value.username.length < 6 ) {
      // console.log(form.controls.username.errors.minlength.actualLength)
      // alert(`please enter  min 6 symbol, your entered symbols is ${form.controls.username.errors.minlength.actualLength}`);
      console.log(form);
      // this.pTagi = `please enter  min 6 symbol, your entered symbols is ${form.controls.username.errors.minlength.actualLength}`
      
    }else {
      // this.pTagi = `you are Loged In`
      return  console.log(form)
    }

    
    
    // console.log(form.username.value)
    // console.log(form.password.value)

  }

  

}
