import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private apiUrl = 'http://localhost:3000/tools';
  
  constructor(private http: HttpClient) {}

    // Method to fetch tools
    getTools(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
}
