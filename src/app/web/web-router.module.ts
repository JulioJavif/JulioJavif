import { NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { WebComponent } from './web.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
    {
        path: '',
        component: WebComponent,
        children: [
            {
                path: 'home',
                component: HomeContentComponent
            }
        ],
        // redirectTo: './home',
        // pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebRouterModule {}