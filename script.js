const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Mở webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => video.srcObject = stream)
  .catch(err => console.error("Không mở được webcam", err));

// Chụp ảnh
function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

// Tải ảnh về máy
function downloadPhoto() {
  const link = document.createElement('a');
  link.download = 'photo.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
