import { CksDynamicComponent } from './components/dynamic/dynamic.component';
import { CksNavbarComponent } from './components/navbar/navbar.component';
import { CksPageRibbonComponent } from './components/profiles/page-ribbon.component';
import { CksSidebarComponent } from './components/sidebar/sidebar.component';
import { CksTopbarComponent } from './components/topbar/topbar.component';
import { CksActiveLanguageDirective } from './directives/active-language.directive';
import { CksSidebarDropdownDirective, CksSidebarDropdownToggleDirective } from './directives/sidebar.directive';
import { CksTranslateDirective } from './directives/translate.directive';
import { CksMainWithHeadComponent } from './layouts/main/with-head/main-with-head.component';
import { CksMainWithSideAndHeadComponent } from './layouts/main/with-side-and-head/main-with-side-and-head.component';

export const CKS_COMPONENTS = [CksDynamicComponent, CksNavbarComponent, CksPageRibbonComponent, CksSidebarComponent, CksTopbarComponent];

export const CKS_DIRECTIVES = [
  CksActiveLanguageDirective,
  CksSidebarDropdownDirective,
  CksSidebarDropdownToggleDirective,
  CksTranslateDirective
];

export const CKS_LAYOUTS = [CksMainWithHeadComponent, CksMainWithSideAndHeadComponent];
