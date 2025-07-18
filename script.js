function gerarQRCode() {
  const input = document.getElementById("loteInput").value;
  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";
  new QRCode(qrcodeDiv, input);
}

const scanner = new Html5QrcodeScanner("preview", {
  fps: 10,
  qrbox: 250
});
scanner.render((decodedText, decodedResult) => {
  document.getElementById("leituraTexto").innerText = `✅ QR Lido: ${decodedText}`;
});


