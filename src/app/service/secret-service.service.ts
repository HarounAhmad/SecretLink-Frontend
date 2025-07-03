import {Injectable, model} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "@src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SecretServiceService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  createSecret(payload: { plainText: string; expiresAt: Date }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, payload);
  }

  revealSecret(id: string, token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/${token}`);
  }
}
