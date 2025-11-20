import { Component } from '@angular/core';
import { data } from '../sample-data/data';
import { MatCardModule } from '@angular/material/card';
import {MatButton} from '@angular/material/button';
@Component({
  selector: 'app-job-list',
  imports: [MatCardModule, MatButton],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent {
  jobData = data;
}
