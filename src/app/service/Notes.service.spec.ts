/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotesService } from './Notes.service';

describe('Service: Notes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService]
    });
  });

  it('should ...', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});
