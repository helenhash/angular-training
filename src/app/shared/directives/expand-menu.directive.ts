import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnChanges, Renderer2} from '@angular/core';

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
