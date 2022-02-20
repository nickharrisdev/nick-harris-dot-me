export class HttpClient {
  async get(url: string): Promise<Response> {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Discogs key=JYcuHLihGmlfOIqEjUcr, secret=dzcaVkpiXDPFsUcAxETgUBBGKGAtFGGu"
      },
    })
    return await res.json();
  };
}
