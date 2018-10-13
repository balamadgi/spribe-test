import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image-service.service';
import { Image } from '../share/models/image.model';

@Component({
  selector: 'bii-change-avatar-window',
  templateUrl: './change-avatar-window.component.html',
  styleUrls: ['./change-avatar-window.component.css']
})
export class ChangeAvatarWindowComponent implements OnInit {

  constructor(private imageService: ImageService) { }
images: Image[]
  ngOnInit() {
this.images = this.imageService.getImages();
  }

}
