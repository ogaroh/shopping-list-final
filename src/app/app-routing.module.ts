import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AccountComponent } from "./components/account/account.component";
import { SignInComponent } from "./components/account/sign-in/sign-in.component";
import { SignUpComponent } from "./components/account/sign-up/sign-up.component";

// routes in app
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account/sign-in', component: SignInComponent },
  { path: 'account/sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
