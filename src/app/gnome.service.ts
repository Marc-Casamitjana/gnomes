import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class GnomeService {
  public gnomes;
  constructor(private http: HttpClient) { }

  getAPIGnomes() {
    return this.http.get(environment.API_URL);
    
  }
}

