import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Joke } from "./joke.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJokes() {
    return this.http.get<Joke[]>(environment.jokesUrl);
  }
}
