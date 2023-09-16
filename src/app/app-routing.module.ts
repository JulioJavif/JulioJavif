import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { WebModule } from './web/web.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule),
    data: {
      preload: true,
    },
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
