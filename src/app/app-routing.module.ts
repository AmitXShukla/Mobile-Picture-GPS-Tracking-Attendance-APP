import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './shared/aboutus.component';
import { LoginComponent } from './shared/login.component';
import { SignupComponent } from './shared/signup.component';
import { AttendanceComponent } from './product/attendance.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
   { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
   { path: 'aboutus', component: AboutusComponent },
   { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
