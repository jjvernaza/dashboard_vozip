import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {

  private urlApi = 'http://demo3535157.mockable.io/clientes';

  constructor(private http: HttpClient) { }

  public getData(): Observable <any> {
    return this.http.get<any>(this.urlApi);
  }

}
