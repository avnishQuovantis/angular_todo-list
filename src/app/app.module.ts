import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { NotesComponent } from './notes/notes.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { NotesService } from './notes.service';
import { HighlightDirective } from './highlight.directive';
import { FocusDirective } from './focus.directive';
import { CheckDirective } from './check.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    NotesComponent,
    CatagoryComponent,
    HighlightDirective,
    CheckDirective,
  ],
  imports: [BrowserModule],
  providers: [NotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
