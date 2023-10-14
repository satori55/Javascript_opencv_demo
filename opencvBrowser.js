function onOpenCvReady() {
    document.getElementById('imageInput').addEventListener('change', function (event) {
        const inputImage = event.target.files[0];
        if (inputImage) {
            const reader = new FileReader();
            reader.onload = function () {
                const imgElement = document.createElement('img');
                imgElement.src = reader.result;
                imgElement.onload = function () {
                    // Create a canvas for image display
                    const canvas = document.getElementById('outputCanvas');
                    const ctx = canvas.getContext('2d');

                    // Set canvas size to match image
                    canvas.width = imgElement.width;
                    canvas.height = imgElement.height;

                    // Draw the image on the canvas
                    ctx.drawImage(imgElement, 0, 0);

                    // You can perform image processing with OpenCV.js here
                    // For example, you can convert the image to grayscale:
                    const src = cv.imread(canvas);
                    const dst = new cv.Mat();
                    // Color to gray
                    // cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
                    // Rotation
                    cv.transpose(src, dst);
                    cv.flip(dst, dst, 1);

                    cv.imshow(canvas, dst);
                    src.delete();
                    dst.delete();
                };
            };
            reader.readAsDataURL(inputImage);
        }
    });
}
