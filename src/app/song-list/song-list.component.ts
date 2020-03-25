import { Component, OnInit } from '@angular/core';
import { songs } from 'src/app/songs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songList = null;

  constructor() {
    this.songList = songs.SONGS_LIST;
   }

  ngOnInit() {
  }

}
