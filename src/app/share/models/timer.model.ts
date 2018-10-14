import { Image } from "./image.model";

export class Timer {
	constructor (
		public duration: number,
		public leftValue: number,
		public image: Image,
		) {}
}