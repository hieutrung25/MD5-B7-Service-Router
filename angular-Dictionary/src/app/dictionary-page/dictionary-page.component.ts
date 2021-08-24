import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService) { }

  ngOnInit() {
  }

}
