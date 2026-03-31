import { useQuery } from "@tanstack/react-query";
import { FetchHttpClient } from "@/utils/http.util";
import { DragonBallService } from "@/services/dragonball.service";

const http = new FetchHttpClient();
const service = new DragonBallService(http);

export function useDragonBall() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => service.all(),
  });
}
