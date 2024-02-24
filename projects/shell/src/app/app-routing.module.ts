import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'mfe1',
    loadChildren: () => 
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './MainModule'
      }).then((m) => m.MainModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => 
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe2',
        exposedModule: './MainModule'
      }).then((m) => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
