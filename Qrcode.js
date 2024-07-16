import React from 'react';
import './Qrcode.css';
import { useState } from 'react';

const Qrcode = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrdata, setQrdata] = useState("https://tutorjoes.in/");
  const [size, setSize] = useState("150");
  async function qrgenerate() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`;
      setImage(url);
    } catch (error) {
      console.log("Error Generating QR", error);
    } finally {
      setLoading(false);
    }
  }
  function download(imageUrl) {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("Error in downloading image", error);
      });
  }
  return (
    <div className='app-container'>
      <center><h2>Generate Your Web QR</h2>
      {loading && <p className='Loading'>Loading</p>}
      {image && <img src={image} alt="QR" />}</center>
      <div>
        <label htmlFor="input-box" id="input-label">Enter the QR code</label>
        <input 
          value={qrdata} 
          onChange={(e) => setQrdata(e.target.value)} 
          type="text" 
          id="input-box" 
          placeholder="Enter The QR Code"
        /><br />  
        <center>
          <button 
            className='generate-QRcode' 
            disabled={loading} 
            onClick={qrgenerate}
          >
            Generate QR Code
          </button>
          <button 
            onClick={() => download(image)} 
            className='downlode-QRcode'
          >
            Download QR
          </button>
        </center>
      </div>
      <center><p>Designed By Abhi Mannan</p></center>
    </div>
  );
}
export default Qrcode;
