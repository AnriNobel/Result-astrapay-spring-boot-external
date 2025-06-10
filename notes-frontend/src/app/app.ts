import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';

bootstrapApplication(NotesComponent, {
  providers: [
    importProvidersFrom(FormsModule),
    provideHttpClient()
  ]
});
