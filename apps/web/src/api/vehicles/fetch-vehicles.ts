import { Vehicle } from "@/types/vehicle";
import { client } from "./_client";

export async function fetchVehicles() {
  return await client<Vehicle[]>("/vehicles", {
    next: {
      tags: ["vehicles"],
    },
  });
}
