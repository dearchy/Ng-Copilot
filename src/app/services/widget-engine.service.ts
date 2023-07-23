// creat an angular service to handle the widget engine
// ng g s home/services/widget-engine
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Widget } from '../models/widget.model';
import { WidgetType } from '../models/widget-type.model';
import { WidgetTypeService } from './widget-type.service';
import { WidgetService } from './widget.service'; // fetch the widget
// injectable decorator
@Injectable({
  providedIn: 'root'
})
export class WidgetEngineService {
  // create a private property to hold the widget types
  private widgetTypes: WidgetType[] | undefined;
  // create a private property to hold the widgets
  private widgets: Widget[];
  // create a private property to hold the widget types subject
  private widgetTypesSubject: BehaviorSubject<WidgetType[]>;
  // create a private property to hold the widgets subject
  private widgetsSubject: BehaviorSubject<Widget[]>;
  // create a private property to hold the widget type service
  private widgetTypeService: WidgetTypeService;
  // create a private property to hold the widget service
  private widgetService: WidgetService;
  // inject the widget type service and the widget service
  constructor(widgetTypeService: WidgetTypeService, widgetService: WidgetService) {
    // set the widget type service
    this.widgetTypeService = widgetTypeService;
    // set the widget service
    this.widgetService = widgetService;
    // create a new behavior subject for the widget types
    this.widgetTypesSubject = new BehaviorSubject<WidgetType[]>([]);
    // create a new behavior subject for the widgets
    this.widgetsSubject = new BehaviorSubject<Widget[]>([]);
    // subscribe to the widget types subject
    this.widgetTypesSubject.subscribe((widgetTypes) => {
      // set the widget types
      this.widgetTypes = widgetTypes;
      // update the widgets
      this.updateWidgets();
    });
    // subscribe to the widgets subject
    this.widgetsSubject.subscribe((widgets) => {
      // set the widgets
      this.widgets = widgets;
    });
    // get the widget types
    this.widgetTypeService.getWidgetTypes().subscribe((widgetTypes) => {
      // set the widget types
      this.widgetTypesSubject.next(widgetTypes);
    });
  }
  // create a method to get the widget types
  getWidgetTypes(): BehaviorSubject<WidgetType[]> {
    // return the widget types subject
    return this.widgetTypesSubject;
  }
  // create a method to get the widgets
  getWidgets(): BehaviorSubject<Widget[]> {
    // return the widgets subject
    return this.widgetsSubject;
  }
  // create a method to update the widgets
  private updateWidgets(): void {
    // create a new array to hold the widgets
    const widgets: Widget[] = [];
    // loop through the widget types
    this.widgetTypes.forEach((widgetType) => {
      // get the widgets for the widget type
      this.widgetService.getWidgets(widgetType.id).subscribe((widgetsForWidgetType) => {
        // loop through the widgets for the widget type
        widgetsForWidgetType.forEach((widget) => {
          // add the widget to the widgets array
          widgets.push(widget);
        });
        // set the widgets
        this.widgetsSubject.next(widgets);
      }
      );
    });
  }
  // create a method to add a widget
  addWidget(widget: Widget): void {
    // add the widget
    this.widgetService.addWidget(widget).subscribe((widgetAdded) => {
      // get the widgets
      this.widgetService.getWidgets(widgetAdded.widgetTypeId).subscribe((widgets) => {
        // set the widgets
        this.widgetsSubject.next(widgets);
      });
    });
  }
  // create a method to update a widget
  updateWidget(widget: Widget): void {
    // update the widget
    this.widgetService.updateWidget(widget).subscribe((widgetUpdated) => {
      // get the widgets
      this.widgetService.getWidgets(widgetUpdated.widgetTypeId).subscribe((widgets) => {
        // set the widgets
        this.widgetsSubject.next(widgets);
      });
    });
  }
  // create a method to delete a widget
  deleteWidget(widget: Widget): void {
    // delete the widget
    this.widgetService.deleteWidget(widget.id).subscribe((widgetDeleted) => {
      // get the widgets
      this.widgetService.getWidgets(widgetDeleted.widgetTypeId).subscribe((widgets) => {
        // set the widgets
        this.widgetsSubject.next(widgets);
      });
    });
  }
}

