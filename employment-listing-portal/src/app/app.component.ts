import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobApplicationStatusComponent } from "./components/job-application-status/job-application-status.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobListComponent, JobApplicationStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'employment-listing-portal';
}
