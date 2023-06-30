import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedindex:number= -1;
  votefor(index:number){
    if(this.isselected(index)){
      this.selectedindex  = -1;
    }
    else{

      this.selectedindex = index;
    }
  }
isselected(index:number){
  return this.selectedindex === index;
}
anyselected(){
  return this.selectedindex !== -1;
}
getvotetext(index:number){
  if(this.isselected(index)){
    return "unvote";
    
  }
  else{
    return "vote"
  }
}
}
 // task creating a vote for movie as the first task