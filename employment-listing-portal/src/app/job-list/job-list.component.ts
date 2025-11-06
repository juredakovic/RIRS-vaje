import { Component } from '@angular/core';
import { data } from '../sample-data/data';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-job-list',
  imports: [MatCardModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  jobData = data;
}
