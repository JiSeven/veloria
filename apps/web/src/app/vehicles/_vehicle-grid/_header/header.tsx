type Props = {
  vehiclesCount: number;
};

export function Header({ vehiclesCount }: Props) {
  return (
    <header>
      <span>{vehiclesCount} vehicles to rent</span>
    </header>
  );
}
