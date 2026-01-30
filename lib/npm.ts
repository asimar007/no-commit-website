export async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch("https://registry.npmjs.org/nocommit/latest", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch version: ${response.statusText}`);
    }

    const data = (await response.json()) as { version: string };
    return data.version;
  } catch (error) {
    console.error("Error fetching latest version:", error);
    return "0.0.5"; // Fallback version
  }
}
