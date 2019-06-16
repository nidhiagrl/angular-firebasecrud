import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
  
})
export class ExampleComponent implements OnInit {
 items:any[];
 keysR :any[]
  //items: Observable<any[]>;
 //items:any;
  constructor(private db: AngularFireDatabase) {
       this.db.list('/')
      .valueChanges()
      .subscribe(val => {
        this.items = val;
        console.log(val);
        
      });
  }
  ngOnInit() {
       
    //  this.db.database.ref('/').on('child_added',(snapshot)=>{
    //    this.items=snapshot.val();
    //      console.log(this.items);

    //   })
    // this.items = this.db.list('/');
    // console.log(this.items);
  }
   addNode(k:string,value: any[]): void {
     this.db.database.ref().child(k).set(value);
    // this.items.push(value);
    
   }

}