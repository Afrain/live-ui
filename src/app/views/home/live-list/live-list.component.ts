import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  progressBarLivesNext = false;
  progressBarLivesPrevious = false;
  livesNext: Live[];
  livesPrevious: Live[];
  urlSafe: SafeResourceUrl;

  constructor(public liveService: LiveService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.listarLive();
   }

  listarLive() {
    this.liveService.getLiveWithFlag('next')
      .subscribe(response => {
        this.livesNext = response.content;
        this.livesNext.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.linkLive);
        });
        this.progressBarLivesNext = true;
      });

    this.liveService.getLiveWithFlag('previous')
      .subscribe(response => {
        this.livesPrevious = response.content;
        this.livesPrevious.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.linkLive);
        });
        this.progressBarLivesPrevious = true;
      });

  }

}
