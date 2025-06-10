import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from '../notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  newContent: string = '';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.notesService.getNotes().subscribe({
      next: (data) => {
        this.notes = data;
      },
      error: (err) => {
        console.error('[ERROR] GET notes:', err);
      }
    });
  }

  addNote(): void {
    console.log('[DEBUG] Tombol tambah diklik:', this.newContent);

    if (this.newContent.trim()) {
      this.notesService.addNote(this.newContent).subscribe({
        next: (note) => {
          console.log('[DEBUG] Note berhasil ditambah:', note);
          this.notes.push(note);
          this.newContent = '';
        },
        error: (err) => {
          console.error('[ERROR] POST note gagal:', err);
        }
      });
    }
  }

  deleteNote(id: string): void {
    this.notesService.deleteNote(id).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note.id !== id);
      },
      error: (err) => {
        console.error('[ERROR] DELETE note gagal:', err);
      }
    });
  }
}
