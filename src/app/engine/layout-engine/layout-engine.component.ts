import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';
import { Layout } from '../../models/layout.modle';

@Component({
  selector: 'app-layout-engine',
  templateUrl: './layout-engine.component.html',
  styleUrls: ['./layout-engine.component.scss']
})
export class LayoutEngineComponent implements OnInit {
  @Input() pageName: string;

  public config: Layout = {};
  public layoutId: string = 'layout-1';

  constructor(
    private metadataService: MetadataService
  ) { 
    this.pageName = 'ng-copilot-home';
    this.metadataService.getMetadata().subscribe((data: any) => {
      this.config = data?.layout;
      this.layoutId = data?.id;
      });
  }

  ngOnInit(): void {
  }
}
