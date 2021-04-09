import "./App.css";
import "antd/dist/antd.css";
import BuyerAccount from "./components/BuyerAccount";
import NamePopup from "./components/popups/NamePopup";
import PasswordPopup from "./components/popups/PasswordPopup";
import NotiPopup from "./components/popups/NotiPopup";
import EmailPopup from "./components/popups/EmailPopup";
import PhonePopup from "./components/popups/PhonePopup";
import EmailCodePopup from "./components/popups/EmailCodePopup";
import PhoneCodePopup from "./components/popups/PhoneCodePopup";

function App() {
  return (
    <div className="App">
      <BuyerAccount />
      <NamePopup />
      <PasswordPopup />
      <NotiPopup />
      <EmailPopup />
      <PhonePopup />
      <EmailCodePopup />
      <PhoneCodePopup />
    </div>
  );
}

export default App;
