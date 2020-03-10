import { Pipe, PipeTransform } from "@angular/core";
import { Joke } from "./joke.model";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Joke[], filterStr: string): any {
    if (!value || !filterStr || value.length === 0 || filterStr.trim() === "") {
      return value;
    }
    const result = [];
    for (const item of value) {
      if (item.setup.toLowerCase().includes(filterStr.toLowerCase())) {
        result.push(item);
      }
    }

    return result;
  }
}
