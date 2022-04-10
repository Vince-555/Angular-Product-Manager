import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators'
import { Observable, of, pipe} from 'rxjs';
import {ProductService} from '../products/product.service'
import {Router} from '@angular/router'


@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  pageTitle : any;
  token : any;

  constructor(private formBuilder: FormBuilder, public service: AuthService, public proSer : ProductService, public route: Router) { }
  onSubmit(): void {

    console.log('Your order has been submitted', this.checkoutForm.value);

    this.service.post(this.checkoutForm.value).subscribe( (response : any) => {
      this.ngOnInit();
      console.log('login response', response);
      if(response.message == 'login success'){
        console.log("route change")

        localStorage.setItem('token', response.token);
        localStorage.setItem('name', response.result[0].name);

        this.route.navigate(['/'])
      }

      });

  }






  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.pageTitle = localStorage.getItem("name");

  }

}
