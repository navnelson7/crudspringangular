import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { HttpClientModule  } from "@angular/common/http";
// import { APOLLO_OPTIONS } from "apollo-angular";
// import { HttpLink } from 'apollo-angular/http';
// import { InMemoryCache } from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './persona/listar/listar.component';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { ListarpaisesComponent } from './paises/listarpaises/listarpaises.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarpaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  // providers: [{
  //   provide: APOLLO_OPTIONS,
  //   useFactory: (httpLink: HttpLink) => {
  //     return {
  //       cache: new InMemoryCache(),
  //       link:  httpLink.create({
  //         uri: 'https://hasura.io/learn/graphql',
  //       })
  //     };
  //   },
  //   deps: [HttpLink]
  // }], 
  //al agregar los providers muestra error 
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
