import { Component, OnInit, Input } from "@angular/core";
import { Joke } from "../joke.model";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.css"]
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;

  constructor() {}

  ngOnInit(): void {
    console.log(this.joke);
  }
}
