import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor() {
   }

  updateJobStatus(status : string) {
    switch(status) {
      case 'application received': {

      }
      break;

      case 'application reviewed': {

      }
      break;

      case 'applicationin line': {

      }
      break;

      case 'applicationcompleted': {
        
      }

    }
  }
}
