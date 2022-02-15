import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './persona/add/add.component';
import { EditComponent } from './persona/edit/edit.component';
import { ListarComponent } from './persona/listar/listar.component';
import { ListarpaisesComponent } from './paises/listarpaises/listarpaises.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'listarpais', component:ListarpaisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
