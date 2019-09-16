import { Component, OnInit, Input } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';
import { Dictionary } from 'src/app/classes/dictionary';
import { DictionaryListItem } from 'src/app/classes/dictionary-list-item';

@Component({
  selector: 'app-dict-item',
  templateUrl: './dict-item.component.html',
  styleUrls: ['./dict-item.component.scss']
})
export class DictItemComponent implements OnInit {

  @Input()
  private dictName: string;
  private dictData: Dictionary;
  
  constructor(private dictListService: DictListService) { }

  ngOnInit() {
    this.dictName = this.dictName;
  }

  setCurrDict(): void{
    let dictName = this.dictName; 
    this.dictListService.setCurrDictName(dictName);
  }
  
  private removeDictionary(): void{
    this.dictListService.removeDictionary(this.dictName);
  }

}
