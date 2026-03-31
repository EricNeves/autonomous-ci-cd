import { Character, DragonBallService } from "./dragonball.service";
import { HttpClient } from "@/utils/http.util";

class MockHttpClient {
  get = jest.fn();
}

describe("DragonBallService", () => {
  it("should fetch characters", async () => {
    const mockHttpClient = new MockHttpClient();

    const mockData: Character[] = [
      {
        id: 1,
        name: "Goku",
        image: "https://example.com/goku.jpg",
        race: "Saiyan",
        ki: "9000",
      },
    ];

    mockHttpClient.get.mockResolvedValue({
      items: mockData,
    });

    const service = new DragonBallService(mockHttpClient as HttpClient);

    const response = await service.all();

    expect(response).toEqual(mockData);
    // expect(response[0].name).toEqual("Hello");
  });
});
