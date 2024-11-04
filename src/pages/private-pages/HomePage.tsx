import { useFetchBingos, useSocket } from "@hooks/index";

import { GameCardList } from "@components/index";

const HomePage = (): JSX.Element => {
  useSocket();
  const { games } = useFetchBingos();

  return (
    <>
      <GameCardList>
        {games.map((game) => (
          <GameCardList.Card key={game._id} game={game} />
        ))}
      </GameCardList>
    </>
  );
};

export default HomePage;
