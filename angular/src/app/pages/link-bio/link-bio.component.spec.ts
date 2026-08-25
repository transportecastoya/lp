import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBioComponent } from './link-bio.component';

describe('LinkBioComponent', () => {
  let component: LinkBioComponent;
  let fixture: ComponentFixture<LinkBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
