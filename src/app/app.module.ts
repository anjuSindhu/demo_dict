import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DictListComponent } from './components/dict-list/dict-list.component';
import { DictListService } from './services/dict-list.service';
import { DictItemComponent } from './components/dict-item/dict-item.component';
import { AddNewDictComponent } from './components/add-new-dict/add-new-dict.component';
import { DictDetailsComponent } from './components/dict-details/dict-details.component';
import { DictionaryInconsistenciesComponent } from './components/dictionary-inconsistencies/dictionary-inconsistencies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DictListComponent,
    DictItemComponent,
    AddNewDictComponent,
    DictDetailsComponent,
    DictionaryInconsistenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DictListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
