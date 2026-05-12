import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Vehicle } from "@/types/vehicle";

import { VehiclePreview } from "./_vehicle-preview";
import { VehicleRentPrice } from "./_vehicle-rent-price";
import { DistanceToVehicle } from "./_distance-to-vehicle";
import { VehicleRating } from "./_vehicle-rating";
import { VehicleDescription } from "./_vehicle-info";
import { VehicleFavoriteToggle } from "./_vehicle-favorite-toggle";

type Props = {
  vehicle: Vehicle;
};

export function VehicleCard({ vehicle: vehicle }: Props) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <DistanceToVehicle />
        <VehicleRating />
        <VehicleFavoriteToggle />
      </CardHeader>

      <CardContent>
        <VehiclePreview image={vehicle.image} />
        <CardTitle>{vehicle.name}</CardTitle>
        <CardDescription className="grid grid-cols-2">
          <VehicleDescription description={vehicle.description} />
          <VehicleRentPrice className="row-end-1 col-end-2" />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
