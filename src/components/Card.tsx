export type CardData = {
  title: string;
  description: string;
  imagePath: string;
};

type CardProps = {
  data: CardData;
};
export const Card = ({ data }: CardProps) => {
  return (
    <div className="card" key={data.title} role="gridcell">
      <div className="image">
        <img src={data.imagePath} alt={data.description} />
      </div>
    </div>
  );
};
