import { Injectable, OnInit } from '@angular/core';
import { Image } from '../share/models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
private imgData : Image[] = [
	{imgAdress: '../../img/0.jpg', imgId: 0},
	{imgAdress: '../../img/1.jpg', imgId: 1},
	{imgAdress: '../../img/2.jpg', imgId: 2},
	{imgAdress: '../../img/3.jpg', imgId: 3},
	{imgAdress: '../../img/4.jpg', imgId: 4},
	{imgAdress: '../../img/5.jpg', imgId: 5},
	{imgAdress: '../../img/6.jpg', imgId: 6}
]

public getImages(): Image[] {
	return this.imgData;
}

public getImageById(id): Image {
	return this.imgData[id]
}
}

