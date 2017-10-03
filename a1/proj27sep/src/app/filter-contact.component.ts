import {Component,Output,EventEmitter} from '@angular/core'
@Component({
    selector:'filter-contact',
    templateUrl:'./filter-contact.component.html'
})
export class FilterContactComponent{
    @Output()
    changeInFilter = new EventEmitter();

    all;

    changedValue(){
        console.log(this.all)
        this.changeInFilter.emit(this.all=='true');
    }
}