export class HttpClient {
  async get(url: string): Promise<Response> {
    const res = await fetch(url)
    return await res.json();
  };
}