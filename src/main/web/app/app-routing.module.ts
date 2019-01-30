import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from "./map-view/map-view.component";

const routes: Routes = [
  { path: '', redirectTo: "map", pathMatch: "full" },
  { path: 'map', component: MapViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
