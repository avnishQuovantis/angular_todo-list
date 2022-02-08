import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  allNotes: { id: number; description: string; type: string }[] = [];
  catagory: string;
  constructor(private noteService: NotesService) {
    this.catagory = this.noteService.catagory;
  }
  ngOnInit(): void {
    this.allNotes = this.noteService.allNotes;
  }
}
