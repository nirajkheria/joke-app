import { Component } from "@angular/core";
import { Joke } from "./joke.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "joke-app";

  jokes: Joke[] = [
    {
      id: 141,
      type: "general",
      setup: "How many hipsters does it take to change a lightbulb?",
      punchline:
        "Oh, it's a really obscure number. You've probably never heard of it."
    },
    {
      id: 29,
      type: "programming",
      setup: "There are 10 types of people in this world...",
      punchline: "Those who understand binary and those who don't"
    },
    {
      id: 53,
      type: "general",
      setup: "How do you make holy water?",
      punchline: "You boil the hell out of it"
    },
    {
      id: 383,
      type: "programming",
      setup: "An IPv6 packet is walking out of the house.",
      punchline: "He goes nowhere."
    },
    {
      id: 10,
      type: "general",
      setup: "What kind of shoes does a thief wear?",
      punchline: "Sneakers"
    },
    {
      id: 306,
      type: "general",
      setup: "Where does Napoleon keep his armies?",
      punchline: "In his sleevies."
    },
    {
      id: 217,
      type: "general",
      setup: "What do you call a fat psychic?",
      punchline: "A four-chin teller."
    },
    {
      id: 384,
      type: "programming",
      setup: "A DHCP packet walks into a bar and asks for a beer.",
      punchline: 'Bartender says, "here, but I’ll need that back in an hour!"'
    },
    {
      id: 371,
      type: "general",
      setup: "Why does a chicken coop only have two doors?",
      punchline: "Because if it had four doors it would be a chicken sedan."
    },
    {
      id: 120,
      type: "general",
      setup: "How do hens stay fit?",
      punchline: "They always egg-cercise!"
    }
  ];
}
