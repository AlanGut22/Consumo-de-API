import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url = "https://dragonball-api.com/api/characters?limit=58";

  constructor(private http: HttpClient) { }

  getPersonajes() {
    return this.http.get<ApiResponse>(this.url);
  }
}
