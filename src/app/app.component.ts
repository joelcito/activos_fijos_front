import { Component } from '@angular/core';

// solo para prueba
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba1';
  public logeo:boolean = true;
  // public logeo:boolean = false;

  constructor(
    private router: Router
  ) { }

  leguearse():void {
    this.router.navigate(['/activos'])
    // this.logeo = true;
    this.logeo = false;
  }
}
