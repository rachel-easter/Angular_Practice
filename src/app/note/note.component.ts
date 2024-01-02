// note.component.ts
import { Component } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  newNote: string = '';
  noteTimestamps: { created: Date, updated?: Date }[] = [];

  constructor(private noteService: NoteService) {}

  get notes(): string[] {
    return this.noteService.getNotes();
  }

  addNote(): void {
    if (this.newNote.trim() !== '') {
      this.noteService.addNote(this.newNote);
      this.noteTimestamps.push({ created: new Date() });
      this.newNote = '';
    }
    else{
      alert("Please fill the fields");
    }
  }

  updateNote(index: number, updatedNote: string): void {
    this.noteService.updateNote(index, updatedNote);
    if (this.noteTimestamps[index]) {
      this.noteTimestamps[index].updated = new Date();
    }
  }

  deleteNote(index: number): void {
    this.noteService.deleteNote(index);
    this.noteTimestamps.splice(index, 1);
  }
}
