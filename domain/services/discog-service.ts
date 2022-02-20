import { HttpClient } from "../../data-access/http-client";
import { ArtistIds } from "../artistIds-enum";

const httpClient = new HttpClient();

export class DiscogService {

  async getDiscogData(url: string) {
    const artistReleaseData = await Promise.all(Object.values(ArtistIds).map(async (artistId) => {
      const releases = await httpClient.get(`${url}artists/${artistId}/releases`);
      const artistDetails = await httpClient.get(`${url}artists/${artistId}`)
      // @ts-ignore
      return { artistDetails, releases: releases.releases }
    }))
    return artistReleaseData;
  }
}
