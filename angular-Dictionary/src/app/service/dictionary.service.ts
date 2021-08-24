import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  public words: IWord[] = [
    {key: 'red', mean: 'Màu đỏ'},
    {key: 'White', mean: 'Màu trắng'},
    {key: 'black', mean: 'Màu Đen'},
    {key: 'yellow', mean: 'Màu vàng'},
    {key: 'blue', mean: 'Màu Xanh Da Trời'},
    {key: 'green', mean: 'Màu Xanh Lá Cây'},
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].key === word) {
        return this.words[i].mean;
      }
    }
    return 'Not found';
  }

  getAll() {
    return this.words;
  }
}
