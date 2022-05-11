import './App.css';
import MainPage from './javascript/components/MainPage';
import { SignIn } from './javascript/components/SignIn';

function App() {
  console.log(localStorage.getItem("profilePic"))
  return (
    <div className="App">

      {localStorage.getItem("email") !== "" ? <MainPage /> : <SignIn /> }

    </div>
  );
}

export default App;
