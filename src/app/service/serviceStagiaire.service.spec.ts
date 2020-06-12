/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceStagiaireService } from './serviceStagiaire.service';

describe('Service: ServiceStagiaire', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceStagiaireService]
    });
  });

  it('should ...', inject([ServiceStagiaireService], (service: ServiceStagiaireService) => {
    expect(service).toBeTruthy();
  }));
});
