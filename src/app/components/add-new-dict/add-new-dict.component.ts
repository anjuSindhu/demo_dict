import { Component, OnInit, Input } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';
import { Dictionary } from 'src/app/classes/dictionary';
import { DictionaryListItem } from 'src/app/classes/dictionary-list-item';

@Component({
  selector: 'app-add-new-dict',
  templateUrl: './add-new-dict.component.html',
  styleUrls: ['./add-new-dict.component.scss']
})
export class AddNewDictComponent implements OnInit {

  public dictName: string;
  private domain:string;
  private range:string;
  data: Array<any>[];
  private dictionary = new Dictionary();
  
  @Input() showMe: boolean
 
  number = 5;
  constructor(private dictListServc: DictListService) { 
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
  }

  addKey(id:string, event:any){
    this.data[id] = event.target.textcontent;
  }
  addValue(id:string, event:any){
    this.data[id] = event.target.textcontent;
  }
  addData(){console.log("Data added >> "+ this.dictName + " this.domain >> " + this.domain + " this.range" + this.range);
    this.dictionary.Add(this.domain, this.range);
    this.domain = "";
    this.range = "";
  }

  private addDict():void {console.log("New Dictionary added >> "+ this.dictName + " this.domain >> " + this.domain + " this.range" + this.range);
    //let dictionary = new Dictionary();
    //dictionary.Add(this.domain, this.range);
    console.log("after pushing ");
    this.dictListServc.addDictionary( this.dictName, this.dictionary);
    this.dictName = '';
    this.showMe = false;
  }

}
