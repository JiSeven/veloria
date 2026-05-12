type Props = {
  description: string;
};

export function VehicleDescription({ description }: Props) {
  return <span className="row-start-2 col-end-1">{description}</span>;
}
