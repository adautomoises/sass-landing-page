import identidadevisual from "../../../../assets/identidadevisual.png";
import logotipo from "../../../../assets/logotipo.png";
import uxui from "../../../../assets/uxui.png";

export function Services() {
  return (
    <section id="servicos" className="services">
      {[
        [
          identidadevisual,
          "Identidade Visual",
          "Crie uma identidade visual memorável e distinta para sua marca, transmitindo sua personalidade de forma impactante.",
        ],
        [
          logotipo,
          "Logotipo",
          "Um logotipo poderoso é a síntese visual da sua marca, transmitindo sua essência e conquistando o reconhecimento instantâneo.",
        ],
        [
          uxui,
          "UX/UI",
          "Design de UX e UI cativantes que proporcionam uma experiência intuitiva e envolvente, impulsionando a satisfação e fidelidade dos usuários.",
        ],
      ].map(([icon, title, description], index) => (
        <div className="services-card" key={index}>
          <div className="services-icon">
            <img src={icon} alt={title} />
          </div>
          <div className="services-info">
            <span className="services-title">{title}</span>
            <p className="services-description">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
