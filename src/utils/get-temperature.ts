export async function getTemperature(): Promise<number> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/temperature`);
  if (!res.ok) {
    throw new Error('failed to fetch temperature');
  }
  const { temperature } = await res.json();
  return temperature;
}
