import { getTestBed, TestBed } from '@angular/core/testing';
import { AlertType } from '../models';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let injector: TestBed;
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
    injector = getTestBed();
    service = injector.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit error message', (done) => {
    service.alertSubscription().subscribe((message) => {
      expect(message).toEqual({ type: AlertType.DANGER, text: 'ERROR' });
      done();
    });

    service.error('ERROR');
  });

  it('should remove error message', () => {
    service.error('ERROR');
    service.alertSubscription().subscribe((message) => {
      expect(message).toBeFalsy();
    });
    service.remove();
  });
});
