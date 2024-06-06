import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [IP, setIP] = useState();

  const handleOk = () => {
    window.location.href = "https://cableav.tv/category/chinese-av-porn/";
    const dataToSend = {
      IP,
      callTime: Date.now() // Thêm thời gian gọi API vào dữ liệu
    };
    axios
      .post(
        "https://63311c61cff0e7bf70e64c8e.mockapi.io/product/api/seach/products",
        dataToSend
      )
      .then((response) => {
        console.log("dataa", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    const dataToSend = {
      IP,
      callTime: Date.now() // Thêm thời gian gọi API vào dữ liệu
    };
    setShowModal(false);
    axios
      .post(
        "https://63311c61cff0e7bf70e64c8e.mockapi.io/product/api/seach/products",
        dataToSend
      )
      .then((response) => {
        console.log("dataa", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
      window.location.href = "https://google.com";
  };

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json")
      .then((response) => {
        if (!response.data) {
          console.error("IP information is not available yet.");
          if (
            window.confirm(
              "Error! An error occurred. Please press F5 to make fresh page!"
            )
          ) {
            window.location.reload();
          }
          return;
        }
        setIP(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p>Are you 18 years old?</p>
              <div className="modal-buttons">
                <button onClick={handleOk}>OK</button>
                <button onClick={() => handleCancel()}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="conatanr">
        <p className="text-ct">
          國產AV 香蕉視頻傳媒 蕉點 JDSY031 頂頭上司和我老婆的秘密 Click me!
        </p>
        <p className="text-ct">
          國產AV 糖心Vlog 超顏值極品禦姐女神 帶到酒店檢查身體
          高冷女神被金主當成精盆蹂躏爆操 狐不妖 Click me!
        </p>
        <p className="text-ct">
          國產AV 糖心Vlog 超顏值極品禦姐女神 帶到酒店檢查身體
          高冷女神被金主當成精盆蹂躏爆操 狐不妖 Click me!
        </p>
        <p className="text-ct">
          國產AV 糖心Vlog 極品騷禦姐多具玩弄 超粗黑陽具騎乘潮吹體驗 MomoYih
          Click me!
        </p>
      </div>

      <div className="image-grid">
        {[...Array(43)].map((_, index) => (
          <img
            key={index}
            src={`photo_${index + 1}_2024-06-06_21-11-51.jpg`}
            alt={`img-${index + 1}`}
            className="grid-image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
