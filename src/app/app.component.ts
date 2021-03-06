import { Component, OnInit } from "@angular/core";
import { Joke } from "./joke.model";
import { JokeService } from "./joke.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  jokes: Joke[];
  filterStr = "";
  jokeTypes: string[] = [];
  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getJokes().subscribe(data => {
      this.jokes = data;

      for (const item of data) {
        if (this.jokeTypes.findIndex(x => x === item.type) < 0) {
          this.jokeTypes.push(item.type);
        }
      }
    });
  }

  getJokes(jokeType: string) {
    const result = [];
    for (const item of this.jokes) {
      if (item.type === jokeType) {
        result.push(item);
      }
    }
    return result;
  }
}
