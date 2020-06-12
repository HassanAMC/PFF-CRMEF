/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormateurServiceService } from './formateurService.service';

describe('Service: FormateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormateurServiceService]
    });
  });

  it('should ...', inject([FormateurServiceService], (service: FormateurServiceService) => {
    expect(service).toBeTruthy();
  }));
});
