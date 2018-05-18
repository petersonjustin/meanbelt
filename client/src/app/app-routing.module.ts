import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { UnoEditComponent } from './uno-edit/uno-edit.component';
import { UnoCreateComponent } from './uno-create/uno-create.component';
import { UnoDetailComponent } from './uno-detail/uno-detail.component';

const routes: Routes = [
    {path: 'pets', component : UnoComponent},
    {path: 'pet/edit/:id', component : UnoEditComponent},
    {path: 'pet/create', component : UnoCreateComponent},
    {path: 'pet/:id', component : UnoDetailComponent},
    {path: '**', component : UnoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
