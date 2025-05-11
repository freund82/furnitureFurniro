import "./layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({children}) {
  return (
    <div className="layout"> {/*Шаблон сайта/страницы*/}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}