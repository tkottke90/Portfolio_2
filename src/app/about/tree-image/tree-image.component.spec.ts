import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeImageComponent } from './tree-image.component';

describe('TreeImageComponent', () => {
  let component: TreeImageComponent;
  let fixture: ComponentFixture<TreeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
