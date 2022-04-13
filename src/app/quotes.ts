export class Quotes {
  showDescription: boolean;
  upvotes: number;
  downvotes: number;
  completeDate: Date; 
  

  constructor( showDescription:boolean, upvotes:number, downvotes:number, completeDate:Date){
  
    this.showDescription=false;
    this.upvotes =0;
    this.downvotes =0;
    this.completeDate=new Date;
  }
}// export class Quotes {
//     id: number;
//     quote: string;
//     upvotes: number;
//     downvotes: number;
//     constructor(id:number, quote:string, upvotes:number, downvotes:number){
//       this.id = id;
//       this.quote = quote;
//       this.upvotes = upvotes;
//       this.downvotes = downvotes;
//     }
// }
