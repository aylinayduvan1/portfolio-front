import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { ManagmentComponent } from './page/managment/managment.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomepageComponent } from './page/homepage/homepage.component';
import { DashboardContentComponent } from '../../src/app/page/managment/components/dashboard-content/dashboard-content.component';
import { MyProfileInfoComponent } from '../app/page/managment/components/my-profile-info/my-profile-info.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { AdvertPageComponent } from './page/managment/components/advert-page/advert-page.component';
import { ExpriencePageComponent } from './page/managment/components/exprience-page/exprience-page.component';
import { EducationPageComponent } from './page/managment/components/education-page/education-page.component';
import { SkillPageComponent } from './page/managment/components/skill-page/skill-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
 
  {
    path: 'dashboard',
    component: ManagmentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: DashboardContentComponent },
      { path: 'profile', component: MyProfileInfoComponent },
      { path: 'advert', component: AdvertPageComponent },
      { path: 'skill', component: SkillPageComponent },
      { path: 'education', component: EducationPageComponent },
      { path: 'experience', component: ExpriencePageComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default child route
    ],
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
