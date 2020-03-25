import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricViewerComponent } from './lyric-viewer.component';

describe('LyricViewerComponent', () => {
  let component: LyricViewerComponent;
  let fixture: ComponentFixture<LyricViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
