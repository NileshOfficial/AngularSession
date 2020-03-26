import { Pipe, PipeTransform } from '@angular/core';
import { AppModule } from '../app.module';

@Pipe({
    name: 'vowelCount'
})
export class VowelCountPipe implements PipeTransform {
    
    transform(value: string): string {
        const countMap = new Map<string, number>();
        
        for(const c of value) {
            if(countMap.has(c)) {
                let count = countMap.get(c);
                countMap.set(c, ++count);
            } else {
                countMap.set(c, 1);
            }
        }

        return this.mapToString(countMap);
    }

    mapToString(map: Map<string, number>): string {
        let str:string = "";

        for(const entry of map.entries()) {
            console.log(entry);
            str += `${entry[0]}: ${entry[1]}\t`;
        }
        
        return str;
    }
}