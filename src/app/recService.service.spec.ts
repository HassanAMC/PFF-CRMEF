/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecServiceService } from './recService.service';

describe('Service: RecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecServiceService]
    });
  });

  it('should ...', inject([RecServiceService], (service: RecServiceService) => {
    expect(service).toBeTruthy();
  }));
});
