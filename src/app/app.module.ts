import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { FileExplorerModule } from './file-explorer/file-explorer.module';

import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    FileExplorerModule,
    MatCardModule, 
    FlexLayoutModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
