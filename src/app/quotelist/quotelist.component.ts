import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  
  quote: Quotes [] =[
    new Quotes(1,'Gabby','Jodi Picoult',"You can always edit a bad page. You can't edit a blank page.",new Date(2022,4,1),0,0),
    new Quotes(2,'Ryan','Maya Angelou',"There is no greater agony than bearing an untold story inside you.",new Date(2021,4,5),0,0),
    new Quotes(3,'Reynard','Ray Bradbury','You fail only if you stop trying',new Date(2020,4,12),0,0)
  ];

  get sortedQuoty(){
    return this.quote.sort((a , b) =>{
      return<any>new Date(b.completeDate)-<any>new Date(a.completeDate);
    });

  }

  toggleDetails(index:number){

    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete:boolean, index : number){
    console.log('from child to parent', isComplete)
    if(isComplete){
      let todelete =confirm('Are you sure you want to delete this quote?')
      if(todelete){
      this.quote.splice(index,1)
      }

    }
  }

  addQuote(quote:any){
    let arraysize = this.quote.length;
    quote.id =arraysize+1;
    quote.author = (quote.author); 
    quote.quote = (quote.quote)
    quote.completeDate =new Date(quote.completeDate)
    this.quote.push(quote)

  }


  first!:number;
  last!:number;
  count!:number;

  highest(){
    this.first = 0
    this.last = 0

    for(this.count=0; this.count <this.quote.length; this.count++){
    this.last =this.quote[this.count].upvotes;
    if(this.last>this.first){this.first = this.last}
  }
  return this.first
}   
  constructor() { }

  ngOnInit(): void {
  }

}
