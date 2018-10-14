import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { Image } from '../share/models/image.model';


@Component({
	selector: 'bii-change-avatar-window',
	templateUrl: './change-avatar-window.component.html',
	styleUrls: ['./change-avatar-window.component.css']
})
export class ChangeAvatarWindowComponent implements OnInit {
	@Output() closeChangeAvaWindow = new EventEmitter<any>();
	@Output() changeAva = new EventEmitter<Image>();

	images: Image[];
	newAva: Image = new Image('', 0);

	constructor(private imageService: ImageService) { }

	ngOnInit() {
		this.images = this.imageService.getImages();
	}

	onCloseChangeAvaWindow() {
		this.closeChangeAvaWindow.emit();
	}

	handleChangeAva(target) {
		this.newAva = this.imageService.getImageById(target['value']);
	}
	
	onChangeAvaApply() {
		this.changeAva.emit(this.newAva);
	}



}
