import designight_logo from "../../../../assets/designight_logo.png";

export function Header() {
  return (
    <section className="header">
      <img src={designight_logo} alt="Logo da Designight" />
      <nav className="navigation">
        <ul>
          {[
            ["#Home", "Home"],
            ["#servicos", "Serviços"],
            ["#portfolio", "Portfólio"],
            ["#contato", "Contato"],
          ].map(([url, title], index) => (
            <li key={index}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
