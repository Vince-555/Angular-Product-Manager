import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle : any;
  token : any;

  constructor( ) { }


logOut(){
  localStorage.clear();
  this.ngOnInit();
}

ngOnInit() {
  this.token = localStorage.getItem("token");
  this.pageTitle = localStorage.getItem("name");
  // console.log("this is token", token)

}
}


