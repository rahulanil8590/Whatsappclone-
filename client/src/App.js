import AccountProvider from "./Component/Context/GoogleAccountDetails";
import Messenger from "./Component/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
 const clientId = "1029691376065-lk6m7ij65ct64940ucimvntt1eg0i065.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
          <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
