import {Injectable, model} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecretServiceService {

  private baseUrl = 'http://localhost:8080/api/v1/secrets';

  constructor(private http: HttpClient) {
  }

  createSecret(payload: { plainText: string; expiresAt: Date }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, payload);
  }

  revealSecret(id: string, token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/${token}`);
  }
}
