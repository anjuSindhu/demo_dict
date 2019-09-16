import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '../classes/dictionary';
import { DictionaryListItem } from '../classes/dictionary-list-item';

@Injectable({
  providedIn: 'root'
})
export class DictListService {
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  public isDicSelected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public dictionary = new Dictionary();
  public dictOfCust:DictionaryListItem;
  private diclList: DictionaryListItem[] = new Array();
  public noOfDictionaries: number;
   
  constructor() { 
    
  }

  setCurrDictName(dictName: string) {
    this.messageSource.next(dictName);
    this.isDicSelected.next(true);
  }

  public addDictionary(name: string, dictionary: Dictionary): void{
    // check if alreeady exist remove it first
    this.removeDictionary(name);
    let addedDic = new DictionaryListItem(name, dictionary);
    this.diclList = this.getListFromLocalStorage();
    this.diclList.push(addedDic);
    this.setListInLocalStorage(this.diclList);
  }

  public updateDictionary(name: string, dictionary: Dictionary): void{
    let updateDic = new DictionaryListItem(name, dictionary);
    this.diclList = this.getListFromLocalStorage();
    this.diclList.push(updateDic);
    this.setListInLocalStorage(this.diclList);
  }
 
  public getDictionaryNames(): string[]{
    let dicListArray = JSON.parse(localStorage.getItem('dicList'));
    let dicName: string[] = [];
    for (let index  in dicListArray) {
      dicName.push(dicListArray[index].name);
    }
    return dicName;
  }

  public getDictionary(name:string): DictionaryListItem{
    let dicListArray = JSON.parse(localStorage.getItem('dicList'));
    let dictionary: Dictionary;
    for (let index  in dicListArray) {
      let nameInStore = dicListArray[index ].name;
      if(name == nameInStore){console.log("in iff");
       dictionary = dicListArray[index ].data;
        this.dictOfCust = new DictionaryListItem( name, dictionary);
      }
    }
    return this.dictOfCust;
  }
  
  public removeDictionary(name:string):void{
    let objToDel = this.getDictionary(name);
    let dicListArray = JSON.parse(localStorage.getItem('dicList'));
    for (let index  in dicListArray) {
      let nameInStore = dicListArray[index ].name;
      if(name == nameInStore){
        delete dicListArray[index];
      }
    }
    this.diclList = dicListArray.filter(obj => obj !== objToDel);
    this.setListInLocalStorage(this.diclList);
  }

  private getListFromLocalStorage(): DictionaryListItem[]{
    let dictList = JSON.parse(localStorage.getItem('dicList'));
    return dictList;
  }

  private setListInLocalStorage(dictList: DictionaryListItem[]){
    localStorage.setItem('dicList', JSON.stringify(dictList));
  }
}

