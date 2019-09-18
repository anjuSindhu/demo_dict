import { Component, OnInit } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';

@Component({
  selector: 'app-dict-list',
  templateUrl: './dict-list.component.html',
  styleUrls: ['./dict-list.component.scss']
})
export class DictListComponent implements OnInit {

  showForm: boolean = false;
  isDicAdded: boolean = false;
  dictList: string[];

  constructor(private dictListsrvc: DictListService) {

   }

  ngOnInit() {
    this.getListOfDictionaryName();
    this.dictListsrvc.isDicAdded.subscribe( value => {
      this.isDicAdded = value;
      if(this.isDicAdded){
        this.getListOfDictionaryName();
      }
    });
  }

  getListOfDictionaryName(): string[]{
    this.dictList = this.dictListsrvc.getDictionaryNames();
    return this.dictList;
  }
  
  toggleAddDictForm(){
    this.showForm = !this.showForm;
  }

}
