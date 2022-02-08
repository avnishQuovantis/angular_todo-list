import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @ViewChild('noteInput') noteInput: ElementRef;
  constructor(private notesService: NotesService) {}

  addNote() {
    console.log(this.noteInput.nativeElement.value);
    this.notesService.addNotes(this.noteInput.nativeElement.value);
  }
}
