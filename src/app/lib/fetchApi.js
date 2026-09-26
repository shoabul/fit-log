const API_URL ="https://api.abcz.workers.dev/api/fitlog"

export async function getWorkoutsData() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch workouts data");
  }

  const data = await res.json();

  // if (id) {
  //   return data.find((item) => String(item.id) === String(id)) || null;
  // }

  return data;
}


// export const getWorkoutsData = async () => {
//   const res = await fetch("");

//   if (!res.ok) {
//     throw new Error("Failed to fetch workouts data");
//   }

//   const data = await res.json();
//   return data;
// };