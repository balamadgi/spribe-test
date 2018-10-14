import { Component } from '@angular/core';
import { Image } from './share/models/image.model';

@Component({
  selector: 'bii-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'test-spribe';
	changedAva: Image;
	openChangeAvaWindow: boolean = false;

	onCloseChangeAvaWindow() {
		this.openChangeAvaWindow = false;
	}

	onOpenChangeAvaWindow() {
		this.openChangeAvaWindow = true;
	}
	
	onChangeAvaApply(event) {
		this.changedAva = event;
	  this.openChangeAvaWindow = false;
	}	
}
