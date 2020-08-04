import { DetailsComponent } from './details/details.component';
import { UsaComponent } from './usa/usa.component';
import { EgyptComponent } from './egypt/egypt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: EgyptComponent},
  {path: 'usa', component: UsaComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
