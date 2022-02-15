import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persona} from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http:HttpClient) { }

  Url = 'https://learnhasura.herokuapp.com/v1/graphql';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url)
  }
}
