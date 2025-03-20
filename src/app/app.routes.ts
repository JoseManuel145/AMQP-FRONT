import { Routes } from '@angular/router';
import { ComplaintFormComponent } from './form/form.component';
import { ComplaintListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'list', component: ComplaintListComponent },
    { path: '', component: ComplaintFormComponent },
];
