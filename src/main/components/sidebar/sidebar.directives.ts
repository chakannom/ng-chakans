import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cksSidebarMenu]'
})
export class CksSidebarMenuDirective {
  constructor(private el: ElementRef) {}

  resetToggles() {
    const elements = this.el.nativeElement.querySelectorAll('.cks-show');
    for (const element of elements) {
      element.classList.remove('cks-show');
    }
  }
}

@Directive({
  selector: '[cksSidebarDropdown]'
})
export class CksSidebarDropdownDirective {
  constructor(private menu: CksSidebarMenuDirective, private el: ElementRef) {}

  toggle() {
    if (this.el.nativeElement.classList.contains('cks-show')) {
      this.el.nativeElement.classList.remove('cks-show');
    } else {
      this.menu.resetToggles();
      this.el.nativeElement.classList.add('cks-show');
    }
  }
}

@Directive({
  selector: '[cksSidebarDropdownToggle]'
})
export class CksSidebarDropdownToggleDirective {
  constructor(private dropdown: CksSidebarDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleClick($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}
