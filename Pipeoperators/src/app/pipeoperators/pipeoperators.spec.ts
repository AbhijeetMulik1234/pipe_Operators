import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeoperators } from './pipeoperators';

describe('Pipeoperators', () => {
  let component: Pipeoperators;
  let fixture: ComponentFixture<Pipeoperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeoperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeoperators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
