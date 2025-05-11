import { Link } from "react-router-dom";
import { useActionState } from "react";
import "./footer.css";

export default function Footer() {

const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const email = formData.get("email");
      console.log("Подписка на email:", email);
      
      // Здесь можно добавить запрос к API (например, через fetch)
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      
      if (!res.ok) return "Ошибка подписки";
      return "Спасибо за подписку!";
    },
    null // Начальное состояние
  );

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h2 className="footer-title">Furniro</h2>
            <p className="footer-address">400 University Drive Suite 200 Coral Gables, <br></br>
                FL 33134 USA</p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Links</h5>
            <p className="footer-link"><Link to="/">Home</Link></p>
            <p className="footer-link"><Link to="/shop">Shop</Link></p>
            <p className="footer-link"><Link to="/about">About</Link></p>
            <p className="footer-link"><Link to="/contact">Contact</Link></p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Help</h5>
             <p className="footer-link"><Link to="/paymentOptions">Payment Options</Link></p>
            <p className="footer-link"><Link to="/Returns">Returns</Link></p>
            <p className="footer-link"><Link to="/privacy">Privacy</Link></p>
          </div>
          <div className="footer-column">
            <h5 className="footer-innerTitle">Newsletter</h5>
            <form action={formAction}>
              <input className="footer-input" type="email" name="email" placeholder="Enter Your Email Address" /><button className="footer-button" type="submit" disabled={isPending}>{isPending ? "Отправка..." : "Subscribe"}</button>
              {state && <p className="footer-state">{state}</p>}
            </form>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2023 furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}