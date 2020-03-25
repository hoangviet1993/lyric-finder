import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetLyricService } from 'src/app/get-lyric.service';
import { EMPTY } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-lyric-viewer',
  templateUrl: './lyric-viewer.component.html',
  styleUrls: ['./lyric-viewer.component.css'],
  providers: [GetLyricService],
})

export class LyricViewerComponent implements OnInit {

  lyrics = '';

  public populateLyric(artist: string, title: string) {
    this.lyricsService.getLyric(
      artist, title).subscribe(
        (response) => {
        this.lyrics = response.lyrics;
        // tslint:disable-next-line: no-shadowed-variable
        }, (error) => {
          window.scrollTo(0, 0);
          this.lyrics = error.error.error;
        }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private lyricsService: GetLyricService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const artist = params.get('artist');
      const title = params.get('title');
      this.populateLyric(artist, title);
    });
  }
}
