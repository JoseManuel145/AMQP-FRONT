import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplaintService } from '../services/complaint-service.service';
import { Report } from '../model/report';

@Component({
  standalone: true,
  selector: 'app-complaint-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [ CommonModule ],
})
export class ComplaintListComponent implements OnInit{
  ngOnInit(): void {
    this.fetchReports();
  }
  constructor(private service: ComplaintService) {}
  reportes: Report[] = [];

  fetchReports(): void {
    this.service.getReports().subscribe(
      (data) => {
        this.reportes = data;
        console.log(this.reportes)
      },
      (error) => {
        console.error('Error fetching complaints:', error);
      }
    );
  }
  
}
