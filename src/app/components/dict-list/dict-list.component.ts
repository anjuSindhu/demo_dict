import { Component, OnInit } from '@angular/core';
import { DictListService } from '../../services/dict-list.service';

@Component({
  selector: 'app-dict-list',
  templateUrl: './dict-list.component.html',
  styleUrls: ['./dict-list.component.scss']
})
export class DictListComponent implements OnInit {

  showForm: boolean = false;
  //private noOfDictionaries: number;

  constructor(private dictListsrvc: DictListService) {

   }

  ngOnInit() {
  }
  
  toggleAddDictForm(){
    this.showForm = !this.showForm;
  }

}
