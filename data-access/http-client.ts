export class HttpClient {
  async get(url: string, headers?: HeadersInit): Promise<Response> {
    const res = await fetch(url, {
      headers,
    })
    return await res.json();
  };
}
