import { useState } from "react";
import open from "../../../../assets/menu_mobile.svg";
import close from "../../../../assets/menu_mobile_close.svg";
import designight_logo from "../../../../assets/designight_logo.png";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuMobile() {
    setShowMenu(!showMenu);
  }

  return (
    <section className="header">
      <img src={designight_logo} alt="Logo da Designight" />
      <nav className="navigation">
        {[
          ["#Home", "Home"],
          ["#servicos", "Serviços"],
          ["#portfolio", "Portfólio"],
          ["#contato", "Contato"],
        ].map(([url, title], index) => (
          <a key={index} href={url}>
            {title}
          </a>
        ))}
      </nav>
      <button className="navigation-mobile-button-open" onClick={handleMenuMobile}>
        <img
          className="navigation-mobile-icon"
          src={open}
          alt="Três traços horizontais representando o Menu de navegação mobile."
        />
      </button>
      {showMenu && (
        <div className="navigation-menu-mobile">
          <div className="navigation-mobile-button-close-container">
            <button onClick={handleMenuMobile}>
              <img
                src={close}
                alt="Icone X representando o fechamento do Menu de navegação mobile."
              />
            </button>
          </div>
          <nav className="navigation-mobile">
            {[
              ["#Home", "Home"],
              ["#servicos", "Serviços"],
              ["#portfolio", "Portfólio"],
              ["#contato", "Contato"],
            ].map(([url, title], index) => (
              <a key={index} href={url}>
                {title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
