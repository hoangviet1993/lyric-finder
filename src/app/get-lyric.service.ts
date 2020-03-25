import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Lyric } from 'src/app/lyric.model';

@Injectable({
  providedIn: 'root'
})

export class GetLyricService {

  constructor(private http: HttpClient) { }
  public getLyric(artist: string, title: string) {
    const ovhLyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    return this.http.get<Lyric>(ovhLyricsUrl)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // TODO: Need to log error with a back-end here
    return throwError(error);
  }
}
