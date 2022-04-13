import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quoty = new Quotes(0,'','','',new Date(),0,0 )
  @Output () add = new EventEmitter<Quotes> ();

  addNewQuote (){
    this.add.emit(this.quoty);
    this.quoty= new Quotes (0,'','','',new Date(),0,0 )
  }
  constructor() { }

  ngOnInit(): void {
  }

}
