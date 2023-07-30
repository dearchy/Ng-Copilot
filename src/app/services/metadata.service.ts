// create a metadata service
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Widget } from '../models/widget.model';
import { WidgetType } from '../models/widget-type.model';
// injectable decorator

// import static data from ng-copilot-home.json
const data = require('../schema/pages/ng-copilot-home.json');
@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  getMetadata(): Observable<any> {
    // return static data from ng-copilot-home.json
    return of(data); // replace {} with your actual data
  }
}
