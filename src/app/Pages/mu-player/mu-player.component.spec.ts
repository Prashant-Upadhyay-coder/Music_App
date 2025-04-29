import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuPlayerComponent } from './mu-player.component';

describe('MuPlayerComponent', () => {
  let component: MuPlayerComponent;
  let fixture: ComponentFixture<MuPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
