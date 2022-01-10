import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountSidenavComponent } from './my-account-sidenav.component';

describe('MyAccountSidenavComponent', () => {
  let component: MyAccountSidenavComponent;
  let fixture: ComponentFixture<MyAccountSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
