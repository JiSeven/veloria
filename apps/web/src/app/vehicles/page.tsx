import { fetchVehicles } from "@/api/vehicles/fetch-vehicles";

import { VehicleListing } from "./_vehicle-listing/vehicle-listing";

export default async function Vehicles() {
  const vehicles = await fetchVehicles();

  return (
    <div className="grid">
      <VehicleListing vehicles={vehicles} />
    </div>
  );
}
