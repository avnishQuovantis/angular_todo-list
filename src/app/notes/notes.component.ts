import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit, AfterViewChecked {
  @Input() note;
  noteDisplay;
  noteCatagory: string;
  constructor(private notesService: NotesService) {
    this.noteCatagory = this.notesService.catagory;
  }
  ngOnInit(): void {}
  doneTask(id) {
    this.notesService.actionOnNotes({ type: 'done', id: id });
  }
  deleteTask(id) {
    this.notesService.actionOnNotes({ type: 'delete', id: id });
  }
  ngAfterViewChecked(): void {
    this.notesService.catagoryEvent.subscribe((catagoryType) => {
      this.noteCatagory = catagoryType;
    });
  }
}
