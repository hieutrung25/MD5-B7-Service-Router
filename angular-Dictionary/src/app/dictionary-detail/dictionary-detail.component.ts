import {Component, OnDestroy, OnInit} from '@angular/core';
import {IWord} from '../model/iword';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const keyDetail = paramMap.get('key');
      const mean1 = this.dictionaryService.search(keyDetail);
      this.word = {
        key: keyDetail,
        mean: mean1
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
