const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkoutsData() {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      return { success: false, data: [] };
    }

    const data = await res.json();
    return { success: true, data: Array.isArray(data) ? data : [] };
  } catch (error) {
    console.error("API Fetch Error:", error);
    return { success: false, data: [] };
  }
}


export async function getWorkoutById(id) {
  const response = await getWorkoutsData();
  if (!response.success) return { success: false, data: null };

  const item = response.data.find((w) => String(w.id) === String(id));
  return { success: !!item, data: item || null };
}