import { HttpClient } from "@/utils/http.util";

export type Character = {
  id: number;
  name: string;
  image: string;
  race: string;
  ki: string;
};

type GetCharactersParams = {
  page?: number;
  limit?: number;
};

type Response = {
  items: Character[];
};

export class DragonBallService {
  constructor(private http: HttpClient) {}

  async all({ page = 1, limit = 8 }: GetCharactersParams = {}): Promise<
    Character[]
  > {
    const data = await this.http.get<Response>(
      `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`,
    );

    return data.items;
  }
}
