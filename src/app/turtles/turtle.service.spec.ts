import { TestBed, inject } from '@angular/core/testing';

import { TurtleService } from './turtle.service';

describe('TurtleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurtleService]
    });
  });

  it('should be created', inject([TurtleService], (service: TurtleService) => {
    expect(service).toBeTruthy();
  }));
});
