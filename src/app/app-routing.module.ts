import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'tab1',
    loadChildren: () => import('./Paginas/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./Paginas/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./Paginas/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

