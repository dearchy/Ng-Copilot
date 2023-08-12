// create a metadata service
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// injectable decorator

// import static data from ng-copilot-home.json
const HomeMeta = require('../schema/pages/ng-copilot-home.json');
const AboutMeta = require('../schema/pages/ng-copilot-about.json');

// create a map with json schema
// add about page to the map
const widgetTypeMap = new Map<string, any>([
  ['ng-copilot-home', HomeMeta],
  ['ng-copilot-about', AboutMeta],
]);
@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  getMetadata(pageName: string): Observable<any> {
    // return static data from ng-copilot-home.json
    return of(widgetTypeMap.get(pageName)) || {}; // replace {} with your actual data
  }
}
