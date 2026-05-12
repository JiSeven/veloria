import { fetchVehicles } from "@/api/vehicles/fetch-vehicles";

import { VehicleGrid } from "./_vehicle-grid/vehicle-grid";

export default async function Vehicles() {
  const vehicles = await fetchVehicles();

  return (
    <div className="grid">
      {/* Listing vs Grid */}
      <VehicleGrid vehicles={vehicles} />
    </div>
  );
}
