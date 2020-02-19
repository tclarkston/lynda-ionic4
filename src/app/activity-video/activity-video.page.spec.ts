import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityVideoPage } from './activity-video.page';

describe('ActivityVideoPage', () => {
  let component: ActivityVideoPage;
  let fixture: ComponentFixture<ActivityVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
