
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';



@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.scss']
})
export class TestmonialComponent implements OnInit{
users:any=[];

constructor(private _userService:ServiceService){

}
 ngOnInit(): void {
   this._userService.getAllUsers().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.users=res.data.slice(0,4)
    }
   })
 }
}
