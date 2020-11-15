import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExpandMenu]'
})
export class ExpandMenuDirective {

  @HostBinding('class.open')
  isOpen = false;

  // ngOnChanges() {
  //   const span = this.el.nativeElement.querySelector('div');
  //   if (this.isOpen) {
  //     this.renderer.addClass(span, 'show');
  //   }
  // }
  @HostListener('click') toggleOpen($event) {
    this.isOpen = !this.isOpen;
  }

}
