import { Component, OnInit, Input } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';
import { Dictionary } from 'src/app/classes/dictionary';

@Component({
  selector: 'app-add-new-dict',
  templateUrl: './add-new-dict.component.html',
  styleUrls: ['./add-new-dict.component.scss']
})
export class AddNewDictComponent implements OnInit {

  public dictName: string;
  domain:string;
  range:string;
  data: Array<any>[];
  private dictionary = new Dictionary();
  
  @Input() showMe: boolean
 
  constructor(private dictListServc: DictListService) {
  }

  ngOnInit() {
  }

  addKey(id:string, event:any){
    this.data[id] = event.target.textcontent;
  }
  addValue(id:string, event:any){
    this.data[id] = event.target.textcontent;
  }
  addData(){//console.log("Data added >> "+ this.dictName + " this.domain >> " + this.domain + " this.range" + this.range);
    this.dictionary.Add(this.domain, this.range);
    this.domain = "";
    this.range = "";
  }

  addDict():void {
    this.dictListServc.addDictionary( this.dictName, this.dictionary);
    this.dictionary = new Dictionary();
    this.showMe = false;
    this.dictListServc.setDictAdded();
  }

}
