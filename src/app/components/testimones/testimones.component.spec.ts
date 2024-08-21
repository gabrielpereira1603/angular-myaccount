import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonesComponent } from './testimones.component';

describe('TestimonesComponent', () => {
  let component: TestimonesComponent;
  let fixture: ComponentFixture<TestimonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
