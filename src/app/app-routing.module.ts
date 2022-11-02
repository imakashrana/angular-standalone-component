import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'book-list' },
  { path: 'book-list', loadComponent: () => import('./book-list.component').then(mod => mod.BookListComponent)},
  { path: 'details/:index', loadComponent: () => import('./book-view.component').then(mod => mod.BookViewComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
