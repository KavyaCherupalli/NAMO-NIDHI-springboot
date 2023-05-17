import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { LandDetailsComponent } from './land-details/land-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewLandDetailsComponent } from './view-land-details/view-land-details.component';
import { ViewRegisteredUsersComponent } from './view-registered-users/view-registered-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'viewUsers' , component:ViewRegisteredUsersComponent},
  {path:'land',component:LandDetailsComponent},
  // { path: 'admin', component: AdminDashboardComponent },
  {path:'requestStatus' , component:UserDashboardComponent},
  {path:'viewLand',component:ViewLandDetailsComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
