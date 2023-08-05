import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageManagerComponent } from './Pages/LandingPage/page-manager/page-manager.component'
import { UserManagerComponent } from './user-manager.component'

const routes: Routes = [
  {
    path: '',
    component: UserManagerComponent,
    children: [{ path: '', component: PageManagerComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
