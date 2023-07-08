interface Props {
  name: string;
  url: string;
  blank?: true;
}

export function Button({ name, url, blank }: Props) {
  return (
    <div className="button">
      <a href={url} target={blank ? "_blank" : "_self"}>
        {name}
      </a>
    </div>
  );
}
