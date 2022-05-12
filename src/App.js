import './App.css';
import MainPage from './MainPage';
import { SignIn } from './SignIn';

function App() {
  console.log(localStorage.getItem("profilePic"))
  return (
    <div className="App">

      {localStorage.getItem("email") !== "" ? <MainPage /> : <SignIn /> }

    </div>
  );
}

export default App;
