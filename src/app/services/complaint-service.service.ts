import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { Report } from '../model/report';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiURL = 'http://34.226.54.117:8080/reports';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiURL).pipe(
      catchError(this.handleError));
  }

  createReport(complaint: { Id: string; Title: string; Content: string }): Observable<any> {
    const payload = {
      id: complaint.Id,
      title: complaint.Title,
      content: complaint.Content,
    };
  
    return this.http.post<any>(`${this.apiURL}`, payload, this.httpOptions);
  }

  sendToRabbit(complaint: { Id: string; Title: string; Content: string }): Observable<any> {
    const payload = {
      id: complaint.Id,
      title: complaint.Title,
      content: complaint.Content,
    };
  
    return this.http.post<any>(`${this.apiURL}/msg`, payload, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
