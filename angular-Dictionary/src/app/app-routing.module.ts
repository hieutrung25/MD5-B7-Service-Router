import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryComponent} from './dictionary/dictionary.component';


const routes: Routes = [ {
  path: 'dictionaries',
  component: DictionaryPageComponent,
  children: [{
    path: ':key',
    component: DictionaryDetailComponent
  }]
},
  {
    path: 'dictionary',
    component: DictionaryComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
