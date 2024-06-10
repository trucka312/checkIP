import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [IP, setIP] = useState<any>();
  const currentTime = new Date();
  const callTimeReal = `${currentTime.getHours()}:${currentTime.getMinutes()} ${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
  
  const handleOk = () => {
    const usePrx = IP?.IP?.ip === '110.78.118.79' ?  true : false;
    
    window.location.href = "https://cableav.tv/category/chinese-av-porn/";
    const dataToSend = {
      IP,
      callTime: callTimeReal,
      useProxy: usePrx
    };
    axios
      .post(
        "https://63311c61cff0e7bf70e64c8e.mockapi.io/product/api/seach/products",
        dataToSend
      )
      .then((response) => {
        console.log("data", response.data);
      })
      .catch((error) => {
        console.error(error); 
      });
  };
  
  const handleCancel = () => {
    const usePrx = IP?.IP?.ip === '110.78.118.79' ?  true : false;
    const dataToSend = {
      IP,
      callTime: callTimeReal,
      useProxy: usePrx
    };
    setShowModal(false);
    axios
      .post(
        "https://63311c61cff0e7bf70e64c8e.mockapi.io/product/api/seach/products",
        dataToSend
      )
      .then((response) => {
        console.log("data", response.data);
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
              "Có lỗi xảy ra, nhấn F5 để làm mới trang!"
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
      {/* <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div> */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p>Bạn đã đủ 18t ?</p>
              <p style={{color: 'red'}}>Trang web này có nội dung không phù hợp với người chưa đủ tuổi vị thành niên</p>
              <div className="modal-buttons">
                <button onClick={handleOk}>OK</button>
                <button onClick={() => handleCancel()}>trở lại</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="conatanr">
        <p className="text-ct-red">
        🔥NEW88 - NƠI CẢM XÚC KHÔNG GIỚI HẠN 
        🔥Đăng ký ngay nhận ngay 58.000 miễn phí, 100 tỷ lì xì tri ân mỗi tháng
        </p>
        <p className="text-ct-red">
        🔥 Casino Trực Tuyến, Thể Thao, Nổ Hũ, Bắn Cá, Đá Gà...
        </p>
        <p className="text-ct-red">
        🔥Cách thanh toán đa dạng, an toàn và bảo mật cao. Đối tác chính thức Villareal FC & OKVIP
        </p>
        <p className="text-ct-red">
        🔥Link tải : https://tinyurl.com/lcnew88
        </p>
      </div>
      <div className="image-grid">
      {[...Array(50)].map((_, index) => (
          <img
            key={index}
            src={`photo_${index + 1}_2024-06-10_21-04-36.jpg`}
            alt={`img-${index + 1}`}
            className="grid-image"
          />
        ))}
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
