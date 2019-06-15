import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AngularFireModule.initializeApp(environment.firebase),
   RouterModule.forRoot([ 
    {path :'example', component : ExampleComponent}
  ])
   ],
   providers: [AngularFireDatabase],
  declarations: [ AppComponent, HelloComponent, ExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
