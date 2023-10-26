import { Component, OnInit } from '@angular/core';
import { RollingStoneService } from '../rolling-stone.service';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  latestPosts: any ;
  siteLogoUrl = 'assets/logoRS.png';

  constructor(private rollingStoneService: RollingStoneService) {}

  openOriginalPost(url: string) {
    window.open(url, '_blank');
  }
  ngOnInit() {
    this.rollingStoneService.getLatestPosts().subscribe(posts => {
      this.latestPosts = posts;
    });
  }
}
