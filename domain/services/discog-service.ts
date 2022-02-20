import { HttpClient } from "../../data-access/http-client";
import { ArtistIds } from "../types/artistIds.enum";

const httpClient = new HttpClient();

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Discogs key=JYcuHLihGmlfOIqEjUcr, secret=dzcaVkpiXDPFsUcAxETgUBBGKGAtFGGu"
}

export class DiscogService {
  async getDiscogData(url: string) {
    const artistReleaseData = await Promise.all(Object.values(ArtistIds).map(async (artistId) => {
      const releases = await httpClient.get(`${url}artists/${artistId}/releases?sort=year&sort_order=desc`, headers);
      const artistDetails = await httpClient.get(`${url}artists/${artistId}`, headers)
      // @ts-ignore
      return { artistDetails, releases: releases.releases }
    }))
    return artistReleaseData;
  }
}
