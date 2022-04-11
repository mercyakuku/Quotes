import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes: Quotes[] = [
      new Quotes(1, 'First Quote',  0,0), 
      new Quotes(2, 'Second Quote', 0,0),
      new Quotes(1, 'Third Quote',  0,0),
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
