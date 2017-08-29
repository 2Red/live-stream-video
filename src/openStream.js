function openStream(callback) {
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
        .then(stream => {
            callback(stream);//Lay stream ra vi bao mat nen se ko dung duoc ip ngoai localhost
            //phai truyen vao mot ham callback vi khong the return stream
        })
        .catch(err => (console.log(err)));
}

module.exports = openStream;