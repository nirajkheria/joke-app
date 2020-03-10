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

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getJokes().subscribe(data => {
      this.jokes = data;
    });
  }
}
