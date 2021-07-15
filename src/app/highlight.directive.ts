import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

    // @HostListener('mouseenter') onMouseEnter() {
    //   this.highlight('green');
    // }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || this.defaultColor || 'red');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
    @Input() appHighlight = '';
    @Input() defaultColor = '';
   // @Input() highlight = '';
    @Input() highlightColor = '';

   
}



