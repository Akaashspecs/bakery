import Cheesecake from "./Cheesecake";
import ContactForm from "./Contact-Form";
import Footer from "./Footer";
import Header from "./Header";
import History from "./History";
import Intro from "./Intro";
import Products from "./Products";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
      <Header />
      <Intro />
      <Products />
      <Cheesecake />
      <History />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
