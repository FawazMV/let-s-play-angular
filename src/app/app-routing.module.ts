import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/Admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'turf-admin',
    loadChildren: () =>
      import('./Modules/Turf-Admin/turf-admin.module').then(
        m => m.TurfAdminModule
      )
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
