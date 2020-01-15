import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cksSidebarDropdown]'
})
export class CksSidebarDropdownDirective {
  constructor(private el: ElementRef) {}

  toggle() {
    if (this.el.nativeElement.classList.contains('cks-show')) {
      this.el.nativeElement.classList.remove('cks-show');
    } else {
      this.el.nativeElement.classList.add('cks-show');
    }
  }
}

/**
 * Allows the dropdown to be toggled via click.
 */
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
