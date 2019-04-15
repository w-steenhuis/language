import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'x' },
  { path: 'x', component: LazyComponent }
];

@NgModule({
  declarations: [LazyComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule]
})
export class LazymoduleModule {}
