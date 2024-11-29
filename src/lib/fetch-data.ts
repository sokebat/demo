export async function fetchData(query: string): Promise<any> {
    const response = await fetch("https://admin.hyperce.io/shop-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    });
  
    if (!response.ok) throw new Error("Failed to fetch data");
  
    const data = await response.json();
    return data.data;
  }
  