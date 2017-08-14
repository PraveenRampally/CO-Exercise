import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'build-detail',
    template: require('./build-detail.component.html'),
    styles: [require('./build-detail.component.less').toString()]
})
export class BuildDetailComponent {
    @Input() detail: any;
    @Input() tileborder: any;
    @Input() tilebackground: any;

    getPieData(x:number,y:number): Array<number>{
        return [].concat(x,y);
    }
}