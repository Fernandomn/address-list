import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginScreenComponent} from "./login/login-screen/login-screen.component";
import {AddressScreenComponent} from "./address-list/address-screen/address-screen.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: 'address-screen', component: AddressScreenComponent},
  // {path: '', component: AppComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
