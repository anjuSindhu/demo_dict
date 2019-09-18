import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DictListService } from '../../services/dict-list.service'
import { Dictionary } from 'src/app/classes/dictionary';
import { DictionaryListItem } from 'src/app/classes/dictionary-list-item';

@Component({
  selector: 'app-dict-details',
  templateUrl: './dict-details.component.html',
  styleUrls: ['./dict-details.component.scss']
})
export class DictDetailsComponent implements OnInit {

  currDictionary: any;
  subscription: Subscription;
  private dicListItem: DictionaryListItem;
  private dictionary= new Dictionary();
  data: { [index: string]: string; };// = this.getDictionaryData();
  isDicSelected: boolean;
  editField: string;

  constructor(private dicListSrvc: DictListService) { 
  }

  ngOnInit() {
    this.dicListSrvc.currentMessage.subscribe(message => this.currDictionary = message);
    this.dicListSrvc.isDicSelected.subscribe( value => {
      this.isDicSelected = value;
      if(this.isDicSelected){
        this.getDictionaryData();
      }
    });
  }

  getDictionaryData():{ [index: string]: string; } {
    if( this.currDictionary &&  this.currDictionary != "default message"){
      this.dicListItem = this.dicListSrvc.getDictionary( this.currDictionary);
      this.dictionary = this.dicListItem.data;
      this.data = this.dictionary.items;
    }
    return this.data;
  }
  
  addRow() {
    this.data["new_key"] = "new_value"//"Row" + this.count;
  }

  updateDictionary(){
    let dictionary = new Dictionary();
    for (var key in this.data) {
        if (this.data.hasOwnProperty(key)) {
            dictionary.Add(key, this.data[key]);
        }
    }
    this.dicListSrvc.addDictionary( this.currDictionary, dictionary);
  }
  customTrackBy(index: number, obj: any): any {
    return index;
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateValue(id: number, key:string, event: any) {
    const editField = event.target.textContent;
    if(this.data[key] != editField){
      this.data[key] = editField;
      this.updateDictionary();
    }
  }

  updateKey(id: number, orgkey:string, value:string, event: any) {
    const editField = event.target.textContent;
    if(editField != orgkey && editField != ""){
      this.data[editField] = value;
      delete this.data[orgkey];
      
      this.updateDictionary();
    }
  }
  
  remove(id: any, key: any) {
    delete this.data[key];
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  
}
