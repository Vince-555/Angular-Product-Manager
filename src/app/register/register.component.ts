import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators'
import { Observable, of, pipe} from 'rxjs';
import {ProductService} from '../products/product.service'
import {Router} from '@angular/router'

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    confirmPass: ''
  });

  constructor(private formBuilder: FormBuilder, public service: AuthService, public proSer : ProductService, public route: Router) { }
  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.service.register(this.checkoutForm.value).subscribe( (response : any) => {
      console.log('Register response', response);
      if(response.message == 'Register success'){
        console.log("route change")
        this.route.navigateByUrl('/')
      }
      // this.get();
      });
    // this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
