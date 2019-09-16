import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DictListService } from 'src/app/services/dict-list.service';
import { DictionaryListItem } from 'src/app/classes/dictionary-list-item';
import { Dictionary } from 'src/app/classes/dictionary';

@Component({
  selector: 'app-dictionary-inconsistencies',
  templateUrl: './dictionary-inconsistencies.component.html',
  styleUrls: ['./dictionary-inconsistencies.component.scss']
})
export class DictionaryInconsistenciesComponent implements OnInit {
  currDictionary: any;
  subscription: Subscription;
  isDicSelected: boolean;
  private dicListItem: DictionaryListItem;
  private dictionary= new Dictionary();
  private data: { [index: string]: string; };
  
  constructor(private dicListSrvc: DictListService) { }

  ngOnInit() {
    this.dicListSrvc.currentMessage.subscribe(message => this.currDictionary = message);
    this.dicListSrvc.isDicSelected.subscribe( value => {
      this.isDicSelected = value;
      if(this.isDicSelected){
        this.getDictionaryData();
      }
    });
  }

  getDictionaryData():{ [index: string]: string } {
  if( this.currDictionary &&  this.currDictionary != "default message"){
    this.dicListItem = this.dicListSrvc.getDictionary( this.currDictionary);
    this.dictionary = this.dicListItem.data;
    this.data = this.dictionary.items;
    this.data = this.validateData(this.data);
  }
  return this.data;
  }

  validateData(dataToValidate: { [index: string]: string; }){
    let incons_data: { [index: string]: string; } = {};
    for (let element  in dataToValidate) {
      let val = dataToValidate[element];
      for (let key in dataToValidate){
        if(val == key){
          incons_data[element] = "CHAIN";
        }
      }
    }
    return incons_data;
  }

}
