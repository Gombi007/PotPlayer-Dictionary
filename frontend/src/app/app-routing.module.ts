import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExportComponent } from './components/export/export.component';
import { MainComponent } from './components/main/main.component';
import { SaveComponent } from './components/save/save.component';
import { SavedWordShowComponent } from './components/saved-word-show/saved-word-show.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'export', component: ExportComponent },
  { path: 'player', component: SavedWordShowComponent },
  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent },
  { path: 'save', component: SaveComponent },
  { path: 'collections', component: CollectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
