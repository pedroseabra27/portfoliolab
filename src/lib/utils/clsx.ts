import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

 export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
 }

 export function handleClickOutside(element: HTMLElement, callbackFunction: () => void) {
	function onClick(event: MouseEvent) {
		if (!element.contains(event.target as Node)) {
			callbackFunction();
		}
	}
	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}