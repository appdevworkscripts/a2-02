import {Component,Input} from '@angular/core'
@Component({
    selector:'app-test',
    template:'{{myvar}}'
})
export class TestComponent{
    @Input()
    myvar;

    ngOnInit(){
        console.log('Test - Init');
    }
    ngOnChanges(){
        console.log('Test - Change');
    }
    ngOnDestroy(){
        console.log('Test - Destroy');
    }
}