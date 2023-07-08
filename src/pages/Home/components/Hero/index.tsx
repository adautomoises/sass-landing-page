import { Button } from "../../../../components/Button";
import tablet from "../../../../assets/tablet.png";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <h1>
          <span>Design Inteligente:</span>
          Criatividade Impulsionada pela IA
        </h1>
        <p>
          Faça parte da revolução do design impulsionada pela IA e conecte-se com milhões de
          brasileiros. Na Designight, oferecemos uma plataforma inovadora que combina a criatividade
          humana com o poder da Inteligência Artificial.
        </p>
        <Button name="Saiba mais" url="#contato" />
      </div>
      <div>
        <img src={tablet} alt="Uma arte feita por IA em um tablet com uma caneta ao lado." />
      </div>
    </section>
  );
}
