type Props = {
  className: string;
};

export function VehicleFavoriteToggle({ className }: Props) {
  return <button className={`${className}`}>Like</button>;
}
