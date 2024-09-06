import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdashComponent } from './postdash.component';

describe('PostdashComponent', () => {
  let component: PostdashComponent;
  let fixture: ComponentFixture<PostdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
