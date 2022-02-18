type CardProps = {
  title: string;
  subtitle: string;
};

export function Card(props: CardProps) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
