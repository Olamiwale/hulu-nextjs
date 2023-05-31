import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";

export default function Home(props) {
  console.log(props)
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

 