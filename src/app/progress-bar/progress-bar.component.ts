import { Component, OnInit } from '@angular/core';
import { Timer } from '../share/models/timer.model';
import { Image } from '../share/models/image.model';
import { ImageService } from '../services/image-service.service';

@Component({
  selector: 'bii-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private imageService: ImageService) { }
localTimer: Timer;
globalTimer: Timer;
localTimerAvatar: Image;
activeAvatar: string = '../../img/0.jpg';


ngOnInit() {
	this.localTimer = new Timer(5000, 0);
	this.globalTimer = new Timer(3000, 0);
	this.activeAvatar = this.imageService.getImageById(0).imgAdress;
	console.log(this.activeAvatar);
}

}