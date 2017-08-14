import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'initialCapitalize'})
export class InitialLetterCapitalizePipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

}