import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'employment-listing-portal';
}
