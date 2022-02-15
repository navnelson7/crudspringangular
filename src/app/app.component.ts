import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './persona/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Citas';
  
  constructor(private router:Router){}

  Listar(){
    this.router.navigate(['listar']);
  }

  Nuevo(){
    this.router.navigate(['add']);
  }
}
