import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../../app/content/partials/general/card/card.module';
import { ChartsModule } from 'ng2-charts';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../../app/content/partials/general/match-height/match-height.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BreadcrumbModule } from '../../app/_layout/breadcrumb/breadcrumb.module';

import { AdTemplatesComponent } from './ad-templates/ad-templates.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  
  imports: [
    CommonModule,
    ChartistModule,
    FormsModule,
    ChartsModule,
    CardModule,
    MatchHeightModule,
    NgxDatatableModule,
    BreadcrumbModule,
    PerfectScrollbarModule,
    NgbModule,
    AgGridModule.withComponents([]),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([  
    {
      path: 'templates',
      component : AdTemplatesComponent
    },    
  ])
  ],
  exports: [RouterModule],
  declarations: [  
    AdTemplatesComponent]
})
export class AdministrationModule { }
