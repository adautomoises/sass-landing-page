interface Props {
  name: string;
  url: string;
  blank?: true;
}

export function Button({ name, url, blank }: Props) {
  return (
    <a className="button" href={url} target={blank ? "_blank" : "_self"}>
      {name}
    </a>
  );
}
