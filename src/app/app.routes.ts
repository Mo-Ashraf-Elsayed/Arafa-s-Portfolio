import { Routes } from '@angular/router';
import { StyleOneHomeComponent } from './style-one-home/style-one-home.component';
import { DefaultHomeOneComponent } from './style-one-home/pages/default-home-one/default-home-one.component';
import { AboutComponent } from './style-one-home/pages/about/about.component';
import { ServiceComponent } from './style-one-home/pages/service/service.component';
import { ServicesDetailsComponent } from './style-one-home/pages/services-details/services-details.component';
import { ProtfolioComponent } from './style-one-home/pages/protfolio/protfolio.component';
import { ProjectDetailsComponent } from './style-one-home/pages/project-details/project-details.component';
import { BlogListComponent } from './style-one-home/pages/blog-list/blog-list.component';
import { BlogDetailsComponent } from './style-one-home/pages/blog-details/blog-details.component';
import { Index2DefaultComponent } from './index-2/pages/index-2-default/index-2-default.component';
import { Index2Component } from './index-2/index-2.component';
import { ContactUsComponent } from './style-one-home/pages/contact-us/contact-us.component';
import { Index3Component } from './index-3/index-3.component';
import { Index3DefaultComponent } from './index-3/pages/index3-default/index3-default.component';

export const routes: Routes = [
    {
        path: '',
        component: StyleOneHomeComponent,
        children: [
            { path: '', component: DefaultHomeOneComponent },
            { path: 'about', component: AboutComponent },
            { path: 'services', component: ServiceComponent },
            { path: 'services-details', component: ServicesDetailsComponent },
            { path: 'project-grid', component: ProtfolioComponent },
            { path: 'project-details', component: ProjectDetailsComponent },
            { path: 'blog-list', component: BlogListComponent },
            { path: 'blog-details', component: BlogDetailsComponent },
            { path: 'contact', component: ContactUsComponent },
        ]
    },
    {
        path: 'index-2', component: Index2Component,
        children: [
            { path: '', component:Index2DefaultComponent}
        ]
    },
    {
        path: 'index-3', component: Index3Component,
        children: [
            { path: '', component: Index3DefaultComponent}
        ]
    }
];
