import { Button } from "../../../../components/Button";

export function Contact() {
  return (
    <section id="contato" className="contact">
      <form className="contact-form">
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" placeholder="Seu nome" />

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" placeholder="Seu email" />

        <label htmlFor="description">Mensagem</label>
        <textarea name="description" placeholder="Sua mensagem..." />

        <Button blank name="Entre em contato" url="https://github.com/adautomoises" />
      </form>
    </section>
  );
}
