import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: string[] = [];

  getNotes(): string[] {
    return this.notes;
  }

  addNote(note: string): void {
    this.notes.push(note);
  }

  updateNote(index: number, updatedNote: string): void {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(index: number): void {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }
}
