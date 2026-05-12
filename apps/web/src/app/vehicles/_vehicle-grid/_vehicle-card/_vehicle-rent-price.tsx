type Props = {
  className: string;
};

export function VehicleRentPrice({ className }: Props) {
  return (
    <span className={className}>
      <strong>$24.59</strong> /{" "}
      <span className="text-muted-foreground">hour</span>
    </span>
  );
}
