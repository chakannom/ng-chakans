import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CksNavbarComponent } from '../../main/components/navbar/navbar.component';
import { CksConfigService } from '../../main/config.service';

describe('CksNavbarComponent test', () => {
  let comp: CksNavbarComponent;
  let fixture: ComponentFixture<CksNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CksNavbarComponent],
      imports: [FontAwesomeModule, NgbModule, RouterTestingModule.withRoutes([]), TranslateModule.forRoot()],
      providers: [
        {
          provide: CksConfigService,
          useValue: new CksConfigService({
            serverApiUrl: '/'
          })
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CksNavbarComponent);
    comp = fixture.componentInstance;
    library.add(faBars);
  });

  describe('UI logic tests', () => {
    it('should initialize with undefined', () => {
      expect(comp.brand).toBeUndefined();
      expect(comp.menuItems).toBeUndefined();
    });
  });

  it('should apply the content', () => {
    comp.brand = {
      title: {
        label: 'Title'
      },
      version: '0.0.1'
    };
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.navbar-title');
    expect(titleElement.innerHTML.trim()).toBe(comp.brand.title.label);

    const versionElement = fixture.nativeElement.querySelector('.navbar-version');
    expect(versionElement.innerHTML.trim()).toBe(comp.brand.version);
  });
});
