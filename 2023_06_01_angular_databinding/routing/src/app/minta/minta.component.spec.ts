import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintaComponent } from './minta.component';

describe('MintaComponent', () => {
  let component: MintaComponent;
  let fixture: ComponentFixture<MintaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MintaComponent]
    });
    fixture = TestBed.createComponent(MintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
