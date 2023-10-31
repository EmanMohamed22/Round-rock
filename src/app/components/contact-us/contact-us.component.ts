import { Component } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private _service:ServiceService,private _toastr:ToastrService){
 }


 registerForm:FormGroup = new FormGroup({
  "email": new FormControl(null,[Validators.required ,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
  "phone": new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  "name": new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20),Validators.pattern(/^[a-z]{0,20}$/)]),
 

 })
  
//  get fname():AbstractControl | null{
//   return this.registerForm.get('name')
// }
// get femail():AbstractControl | null{
//   return this.registerForm.get('email')
// }
// get phone():AbstractControl | null{
//   return this.registerForm.get('phone')
// }

 register(){
  console.log(this.registerForm);
  this._service.handleContact(this.registerForm.value).subscribe({
    next:response=>{
      console.log(response);
      if(response.message ==  'Email sent successfully'){
        this._toastr.success(response.message,"success")
        

      }
      
    },
    error:err=>{
      console.log(err);
      this._toastr.warning(err.message,"error")
    }
  })
  
 }
}
