import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  m = 9;
  n = 8; 
  rowArr = [];
  colArr = [];
  numArray = [];
  newArr = [];
  pos;
  dir;
  showUp = true;
  showDown = true;
  

  ngOnInit(){
    for(let i=0; i<this.m; i++){
      this.rowArr.push(i);
    }
    for(let i=0; i<this.n; i++){
      this.colArr.push(i);
    }
    this.numArray = new Array(this.m * this.n).fill('');    
  }

  getMatrix(i,j){
    if(this.newArr.length === 1){
      this.numArray[this.n*i+j] = "E"
      let obj = {"row": i, "col": j}
      this.newArr.push(obj)      
    }else if(this.newArr.length === 2){}
    else{
      this.numArray[this.n*i+j] = "S"
      let obj = {"row": i, "col": j}
      this.newArr.push(obj)
    }
  }

  showUpPath(){
    this.showUp = false;
    this.showDown = false;
    let start = this.newArr[0];
    let end = this.newArr[1];
    this.dir = "up";
    if(start.col > end.col){
      this.pos = 'left'
      for(let i = start.col; i>=end.col; i--){
        if(this.dir != "up"){
          for(let j=0; j<=this.m; j++){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↓";
            }
          }
          this.dir = "up";
          start.row = this.m;
        }else{
          for(let j=start.row; j>=0; j--){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↑";
            }
          }
          this.dir = "down";
        }
      }
    }else if(start.col < end.col){
      this.pos = 'right';
      for(let i = start.col; i<=end.col; i++){
        if(this.dir != "up"){
          for(let j=0; j<=this.m; j++){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↓";
            }
          }
          this.dir = "up";
          start.row = this.m;
        }else{
          for(let j=start.row; j>=0; j--){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↑";
            }
          }
          this.dir = "down";
      }
    }
    }else if(start.row < end.row && start.col == end.col){
      for(let j=start.row; j<=end.row; j++){
        let i = start.col
        if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
          if(i==end.col && j==end.row){
            break;
          }
        }else{
          this.numArray[this.n*j+i] = "↓";
        }
      }     
    }else if(start.row > end.row && start.col == end.col){
      for(let j=start.row; j>=end.row; j--){
        let i = start.col
        if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
          if(i==end.col && j==end.row){
            break;
          }
        }else{
          this.numArray[this.n*j+i] = "↑";
        }
      } 
    }
  }

  showDownPath(){
    this.showUp = false;
    this.showDown = false;
    let start = this.newArr[0];
    let end = this.newArr[1];
    this.dir = "down";
    if(start.col > end.col){
      this.pos = 'left'
      for(let i = start.col; i>=end.col; i--){
        if(this.dir != "down"){
          for(let j=this.m; j>=0; j--){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↑";
            }
          }
          this.dir = "down";
          start.row = 0;
        }else{
          for(let j=start.row; j<=this.m; j++){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↓";
            }
          }
          this.dir = "up";
        }
      }
    }else if(start.col < end.col){
      this.pos = 'right';
      for(let i = start.col; i<=end.col; i++){
        if(this.dir != "down"){
          for(let j=this.m; j>=0; j--){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↑";
            }
          }
          this.dir = "down";
          start.row = 0;
        }else{
          for(let j=start.row; j<=this.m; j++){
            if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
              if(i==end.col && j==end.row){
                break;
              }
            }else{
              this.numArray[this.n*j+i] = "↓";
            }
          }
          this.dir = "up";
      }
    }
    }else if(start.row < end.row && start.col == end.col){
      for(let j=start.row; j<=end.row; j++){
        let i = start.col
        if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
          if(i==end.col && j==end.row){
            break;
          }
        }else{
          this.numArray[this.n*j+i] = "↓";
        }
      }     
    }else if(start.row > end.row && start.col == end.col){
      for(let j=start.row; j>=end.row; j--){
        let i = start.col
        if((i==start.col && j==start.row) || (i==end.col && j==end.row)){
          if(i==end.col && j==end.row){
            break;
          }
        }else{
          this.numArray[this.n*j+i] = "↑";
        }
      } 
    }
  }
  
  reset(){
    location.reload();
  }
}
