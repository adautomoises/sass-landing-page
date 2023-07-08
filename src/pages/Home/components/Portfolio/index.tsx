import card1 from "../../../../assets/1.png";
import card2 from "../../../../assets/2.png";
import card3 from "../../../../assets/3.png";
import card4 from "../../../../assets/4.png";
import card5 from "../../../../assets/5.png";
import card6 from "../../../../assets/6.png";
import card7 from "../../../../assets/7.png";
import card8 from "../../../../assets/8.png";
import card9 from "../../../../assets/9.png";
import { Button } from "../../../../components/Button";

export function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfólio</h2>
      <h3 className="portfolio-subtitle">
        Serviços finalizados que Impulsionaram o Sucesso de Nossos Clientes
      </h3>
      <div className="portfolio-cards">
        {[card1, card2, card3, card4, card5, card6, card7, card8, card9].map((card, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={card} alt="Card do serviços de nosso cliente." />
          </div>
        ))}
      </div>
      <Button blank name={"Ver mais"} url={"https://github.com/adautomoises"} />
    </section>
  );
}
