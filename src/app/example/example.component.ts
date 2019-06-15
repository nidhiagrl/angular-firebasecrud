import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
  
})
export class ExampleComponent implements OnInit {
 items: AngularFireList<any[]>;
  //items: Observable<any[]>;
 //items:any;
  constructor(private db: AngularFireDatabase) {
   
  }
  ngOnInit() {
    this.db.list('/')
      .valueChanges()
      .subscribe(val => {
        this.items = val;
        // console.log(val);
      });
    //  this.db.database.ref('/').on('child_added',(snapshot)=>{
    //    this.items.push(snapshot.val());
    //  })
    // this.items = this.db.list('/');
    // console.log(this.items);
  }
  addNode(value: any[]): void {
    this.items.push(value);
  }

}