// creat an angular service to handle the widget engine
// ng g s home/services/widget-engine
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Widget } from '../models/widget.model';
import { WidgetType } from '../models/widget-type.model';

// injectable decorator
@Injectable({
  providedIn: 'root'
})
export class WidgetEngineService {
  constructor() { }
  
  // to create a function to load angular component dynamically

}

