import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AceOutputComponent} from './ace-output.component';

describe('AceOutputComponent', () => {
  let component: AceOutputComponent;
  let fixture: ComponentFixture<AceOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
