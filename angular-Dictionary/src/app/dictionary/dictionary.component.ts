import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/iword';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: IWord;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
  }

  search() {
    // @ts-ignore
    const word = document.getElementById('key').value;
    console.log(word);
    const mean1 = this.dictionaryService.search(word);
    this.word = {
      key: word,
      mean: mean1
    };
  }
}
