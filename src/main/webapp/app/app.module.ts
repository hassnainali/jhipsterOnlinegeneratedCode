import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterOnlinegeneratedCodeSharedModule, UserRouteAccessService } from './shared';
import { JhipsterOnlinegeneratedCodeAppRoutingModule} from './app-routing.module';
import { JhipsterOnlinegeneratedCodeHomeModule } from './home/home.module';
import { JhipsterOnlinegeneratedCodeAdminModule } from './admin/admin.module';
import { JhipsterOnlinegeneratedCodeEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterOnlinegeneratedCodeAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterOnlinegeneratedCodeSharedModule,
        JhipsterOnlinegeneratedCodeHomeModule,
        JhipsterOnlinegeneratedCodeAdminModule,
        JhipsterOnlinegeneratedCodeEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterOnlinegeneratedCodeAppModule {}
