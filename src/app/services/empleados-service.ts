import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IEmpleado } from '../interfaces/iempleado.interface';

type IResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: IEmpleado[];
}

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'https://peticiones.online/api/users';

  getAll () : Promise<IResponse> {
    return lastValueFrom(this.httpClient.get<IResponse>(this.baseUrl));
  }
}
