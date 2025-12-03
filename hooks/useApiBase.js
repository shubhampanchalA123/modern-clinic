export default function useApiBase() {
  if (typeof window !== "undefined") {
    const host = window.location.hostname; // auto IP of device
    const port = 50061; // backend port
    return `http://${host}:${port}`;
  }
  return "";
}
