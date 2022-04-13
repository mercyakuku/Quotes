import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    // quotes: Quotes[] = [
    //   new Quotes(1, 'First Quote',  0,0), 
    //   new Quotes(2, 'Second Quote', 0,0),
    //   new Quotes(3, 'Third Quote',  0,0),
    // ]

    // array: number[] = this.quotes.map(quote=>quote.upvotes)
    // highest = Math.max(...this.array)
  constructor() { }
  @Input () quote! : Quotes;
  @Output () isComplete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    
    this.isComplete.emit(complete)
  }

 
  upvotes() {
    this.quote.upvotes ++;
  }

  downvotes() {
    this.quote.downvotes  ++;
  }

  

  

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashCan = faTrashCan;

  ngOnInit(): void {
  }

}
