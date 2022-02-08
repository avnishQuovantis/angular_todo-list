import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css'],
})
export class CatagoryComponent implements OnInit {
  currentCatagory: string;
  constructor(private notesService: NotesService) {
    this.currentCatagory = this.notesService.catagory;
  }

  ngOnInit(): void {}
  onSelectCatagory(catagory) {
    // this.notesService.catagory = catagory;
    this.currentCatagory = catagory;
    this.notesService.catagoryEvent.emit(catagory);
  }
}
