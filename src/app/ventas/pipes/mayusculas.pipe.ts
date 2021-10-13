import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'mayusculas' })
export class MayusculasPipe implements PipeTransform {
    transform(data: string, enMayusculas: boolean = true): string {
        return enMayusculas ? data.toUpperCase() : data.toLowerCase();
    }
}