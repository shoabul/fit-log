const API_URL ="https://api.api-store.workers.dev/api/fitlog"

export async function getWorkoutsData() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts data");
  }

  const data = await res.json();

  return data;
}
