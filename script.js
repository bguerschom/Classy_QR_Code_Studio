let qrCode;

/* Function to generate QR Code */
function generateQRCode() {
    const url = document.getElementById('urlInput').value;
    const bgColor = document.getElementById('bgColorInput').value;
    const cornerColor = document.getElementById('cornerColorInput').value;
    const dotColor = document.getElementById('dotColorInput').value;
    const classyColor = document.getElementById('classyColorInput').value;
    const cornerType = document.getElementById('cornerTypeInput').value;
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    // Clear any existing QR code
    qrCodeContainer.innerHTML = ''; 

    if (url) {
        // Create a new QR Code with styling options
        qrCode = new QRCodeStyling({
            width: 300, 
            height: 300, 
            data: url,
            dotsOptions: {
                color: dotColor,
                type: "classy"
            },
            backgroundOptions: {
                color: bgColor,
            },
            cornersSquareOptions: {
                color: cornerColor,
                type: cornerType
            },
            cornersDotOptions: {
                color: classyColor
            }
        });

        // Append the generated QR code to the container
        qrCode.append(qrCodeContainer);
    } else {
        alert('Please enter a URL.');
    }
}

/* Function to download the generated QR Code */
function downloadQRCode() {
    if (qrCode) {
        const exportScale = parseInt(document.getElementById('exportScale').value, 10);
        qrCode.download({ name: "qr-code", extension: "png", scale: exportScale });
    } else {
        alert('Please generate a QR code first.');
    }
}