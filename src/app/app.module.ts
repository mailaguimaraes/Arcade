import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdressComponent } from './adress/adress.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


import {MatToolbarModule} from '@angular/material/toolbar';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';







@NgModule({
  declarations: [
    AppComponent,
    AdressComponent,
    DragComponent,

    CardComponent,
     FooterComponent,
     HeaderComponent,
     

    
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule,
    
    MatToolbarModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
