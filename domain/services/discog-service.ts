import { HttpClient } from "../../data-access/http-client";
import { ArtistIds } from "../artistIds-enum";

const httpClient = new HttpClient();

export class DiscogService {

  // const nhReleaseData = getArtistReleaseData("6067515");
  // const rmReleaseData = getArtistReleaseData("10538149");


  async getDiscogData(url: string) {
    // const data = httpClient.get(`${url}/artists/`);
    // use promise.all to do mapping and get all the data I need. 
    // then return it in the format I need
    // only have to call useSWR one time in the page. 
    const getArtistReleaseData = (artistId: string) => {

    }

    // ["6067515", "10538149"]
    const artistReleaseData = await Promise.all(Object.values(ArtistIds).map(async (artistId) => {
      const releases = await httpClient.get(`${url}/artists/${artistId}/releases`);
      const artistDetails = await httpClient.get(`${url}/artists/${artistId}`)

      // @ts-ignore
      return { artistDetails, releases: releases.releases }
    }))

    return artistReleaseData;
  }
}

// need to return an array of 
// objects containing info for each artist
// for each artist need to 1. get list of releases
// 2. get release details for each release
// 