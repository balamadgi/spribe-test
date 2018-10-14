import { Component, OnInit, Output, EventEmitter, Input, OnChanges, DoCheck } from '@angular/core';
import { Timer } from '../share/models/timer.model';
import { Image } from '../share/models/image.model';
import { ImageService } from '../services/image-service.service';

@Component({
  selector: 'bii-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, DoCheck {
@Output() openChangeAvaWindow = new EventEmitter<Image>();
@Input() changedImg: Image;

localTimer: Timer;
globalTimer: Timer;
checkLocal: boolean = false;
checkGlobal: boolean = false;

constructor(private imageService: ImageService) { }

ngOnInit() {
	this.changedImg = this.imageService.getImageById(0);
	this.localTimer = new Timer(5000, 0, this.changedImg);
	this.globalTimer = new Timer(3000, 0, this.changedImg);
	}

onOpenChangeAvaWindow(target: string) {
	if (target == 'local') {
		this.openChangeAvaWindow.emit(this.localTimer.image);
		this.checkLocal = true; this.checkGlobal = false;
	}
else if (target == 'global') {
	this.openChangeAvaWindow.emit(this.globalTimer.image);
	this.checkLocal = false; this.checkGlobal = true;
}
}

ngDoCheck() {       //todo
	if (this.checkLocal) {
		this.localTimer.image = this.changedImg;	
		console.log(this.localTimer.image);
	}
	else if (this.checkGlobal) {
		this.globalTimer.image = this.changedImg;
		console.log(this.globalTimer.image);
	}	
}
}