import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsChooseComponent } from './clients-choose.component';

describe('ClientsChooseComponent', () => {
  let component: ClientsChooseComponent;
  let fixture: ComponentFixture<ClientsChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
