import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Station } from '../train/model/station';
import { Ticket } from '../train/model/ticket';
import { Train } from '../train/model/train';
import { TrainSearchResult } from '../train/model/trainSearchResult';

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  constructor(private http: HttpClient) {}

  getTrains(params?: any): Observable<TrainSearchResult> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set(
          'filter',
          (params.filter && JSON.stringify(params.filter)) || ''
        ),
      };
    }
    return this.http.get(`${baseUrl}trains`, options).pipe(
      map((data: any) => {
        return new TrainSearchResult(data);
      })
    );
  }

  getStations(): Observable<Station[]> {
    return this.http.get(`${baseUrl}stations`).pipe(
      map((data: any) => {
        return (data && data.map((elem: any) => new Station(elem))) || [];
      })
    );
  }

  getTrain(trainId: number): Observable<Train> {
    return this.http.get(`${baseUrl}trains/${trainId}`).pipe(
      map((data: any) => {
        return new Train(data);
      })
    );
  }

  getTickets(params?: any): Observable<Ticket[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get(`${baseUrl}tickets`, options).pipe(
      map((data: any) => {
        return (
          (data.results && data.results.map((x: any) => new Ticket(x))) || []
        );
      })
    );
  }

  postTicket(trainId: number, newTicket: Ticket): Observable<any> {
    return this.http.post(`${baseUrl}tickets`, newTicket).pipe(
      map((data: any) => {
        return new Ticket(data);
      })
    );
  }

  deleteTicket(id: number) {
    return this.http.delete(`${baseUrl}tickets/${id}`);
  }
}
