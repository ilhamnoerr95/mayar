import Home from "pages/Home";
import Header from "components/header";
// eslint-disable-next-line no-unused-vars
import Footer from "components/footer";
import "./_app.scss";

function App() {
  return (
    <div style={{ backgroundColor: "#E3E2DD" }} className="wrapper-app">
      <Header />
      <div className="container">
        <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
