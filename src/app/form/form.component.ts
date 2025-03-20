import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComplaintService } from '../services/complaint-service.service';

@Component({
  standalone: true,
  selector: 'app-complaint-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [FormsModule],
})
export class ComplaintFormComponent {
  constructor(private service: ComplaintService) { }
  complaint = { Id: '', Title: '', Content: '' };

  submitComplaint() {
    console.log('Complaint submitted:', this.complaint);
    this.service.createReport(this.complaint).subscribe(
      (response) => {
        console.log('Complaint created:', response);
      },
      (error) => {
        console.error('Error creating complaint:', error);
      }
    );

    this.service.sendToRabbit(this.complaint).subscribe(
      (response) => {
        console.log('Complaint sent to Rabbit:', response);
      });
      
    this.complaint = { Id: "", Title: '', Content: '' };
  }
}