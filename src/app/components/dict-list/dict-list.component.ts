import { Component, OnInit } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';

@Component({
  selector: 'app-dict-list',
  templateUrl: './dict-list.component.html',
  styleUrls: ['./dict-list.component.scss']
})
export class DictListComponent implements OnInit {

  showForm: boolean = false;
  dictList: string[];

  constructor(private dictListsrvc: DictListService) {

   }

  ngOnInit() {
    this.getListOfDictionaryName();
  }

  getListOfDictionaryName(): string[]{console.log("fetching dic names");
    this.dictList = this.dictListsrvc.getDictionaryNames();
    console.log(" dic names" + JSON.stringify(this.dictList));
    return this.dictList;
  }
  
  toggleAddDictForm(){
    this.showForm = !this.showForm;
  }

}
