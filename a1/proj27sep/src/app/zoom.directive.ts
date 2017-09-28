import {Directive,ElementRef,OnInit,HostListener} from '@angular/core';
@Directive({
    selector:'[zoom]'
})
export class ZoomDirective implements OnInit{
    constructor(private el:ElementRef){
        this.el.nativeElement.style.fontSize="12px"
    }
    ngOnInit(){
        
    }
    @HostListener('mouseenter')
    zoomIn(){
        this.el.nativeElement.style.fontSize="30px"
    }
    @HostListener('mouseleave')
    zoomOut(){
        this.el.nativeElement.style.fontSize="12px"
    }

}