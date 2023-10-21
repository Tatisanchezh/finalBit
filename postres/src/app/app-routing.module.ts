import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from "./components/home/home.component";
import {LoginComponent} from './components/login/login.component';
import {ReposteriaComponent} from "./components/reposteria/reposteria.component";
import { TopComponent } from './components/top/top.component';
import { FooterComponent } from './components/footer/footer.component';



const routes: Routes = [
{path: "", component: HomeComponent},
{path: "login", component: LoginComponent},
{path: "reposteria", component: ReposteriaComponent},
{path: "top", component: TopComponent},
{path: "footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
