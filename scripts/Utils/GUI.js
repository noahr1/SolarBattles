export function resourceLoader(path) {
    const img = new Image();
  
    img.onload = function () {
      // Image has loaded successfully
      callback(null, img);
    };
  
    img.onerror = function () {
      // Error loading the image
      const error = new Error('Error loading image');
      callback(error, null);
    };
  
    img.src = path;
}

export class GUI {
    constructor() {
        
    }
}