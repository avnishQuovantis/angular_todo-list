import { AfterContentChecked, EventEmitter } from '@angular/core';

export class NotesService {
  catagory: string = 'active';
  allNotes = [{ id: 0, description: 'Demo', type: 'active' }];

  catagoryEvent = new EventEmitter<string>();

  addNotes(note: string) {
    console.log(note);

    this.allNotes.push({
      id: this.allNotes.length,
      description: note,
      type: 'active',
    });
    console.log(this.allNotes);
  }
  actionOnNotes(data) {
    // console.log(data);
    if (data['type'] == 'delete') {
      let index = this.allNotes.findIndex((obj) => {
        return obj['id'] === data['id'];
      });
      const lastIndex = index == 0 ? 1 : index;
      this.allNotes.splice(index, lastIndex);
      console.log('inside service ', this.allNotes);
    } else {
      const index = this.allNotes.findIndex((obj) => obj['id'] == data['id']);
      this.allNotes[index]['type'] = 'done';
      console.log(this.allNotes);
    }
  }
}
