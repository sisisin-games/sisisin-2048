import React from 'react';
import { Game } from './main';
let global = {
  keys: [] as boolean[],
};
import { AllResult, GameResult, getAllResult, getOrCreateMe, setAllResult, setMe } from './storage';
function useUserName() {
  const user = getOrCreateMe();
  const [name, setName] = React.useState(user.name);
  const set = (n: string) => {
    setName(n);
    setMe({ ...user, name: n });
  };
  return [name, set] as const;
}
function setMyBest(result: GameResult) {
  const allResult = getAllResult();
  allResult.me.push(result);
  setAllResult(allResult);
  return allResult;
}
function getMyBest(allResult: AllResult) {
  return [...allResult.me]
    .sort((a, b) => gameStatusSort(a, b) || timeSort(a, b) || moveCountSort(a, b))
    .pop()!;

  function gameStatusSort(a: GameResult, b: GameResult) {
    if (a.gameStatus === b.gameStatus) return 0;
    if (a.gameStatus === 'cleared') return 1;
    if (a.gameStatus === 'died') return -1;
  }
  function timeSort(a: GameResult, b: GameResult) {
    return b.time - a.time;
  }
  function moveCountSort(a: GameResult, b: GameResult) {
    return b.moveCount - a.moveCount;
  }
}
function isSame(a: GameResult, b: GameResult) {
  return Object.keys(a).every((k) => (a as any)[k] === (b as any)[k]);
}
export const App: React.FC = () => {
  const [isStarted, setIsStarted] = React.useState(false);
  const [name, setName] = useUserName();

  React.useEffect(() => {
    if (!isStarted) return;

    const game = new Game();
    game.onGameEnd((result: GameResult) => {
      setIsStarted(false);
      let text = `game over!
result: ${result.gameStatus === 'cleared' ? 'クリア' : '詰んだ'}
time: ${result.formatted}
動かした回数: ${result.moveCount}
`;
      const allResult = setMyBest(result);

      if (isSame(result, getMyBest(allResult))) {
        text += '\n\n自己べ更新!!';
      }
      alert(text);
    });

    const keydownListener = (e: DocumentEventMap['keydown']) => {
      global.keys[e.keyCode] = true;
      if (global.keys[38]) {
        // up
        game.move(0);
      } else if (global.keys[39]) {
        // right
        game.move(1);
      } else if (global.keys[40]) {
        // down
        game.move(2);
      } else if (global.keys[37]) {
        // left
        game.move(3);
      } else {
        return;
      }
    };
    const keyupListener = (e: DocumentEventMap['keyup']) => {
      global.keys[e.keyCode] = false;
    };
    document.addEventListener('keydown', keydownListener);
    document.addEventListener('keyup', keyupListener);
    return () => {
      document.removeEventListener('keydown', keydownListener);
      document.removeEventListener('keyup', keyupListener);
    };
  });
  return (
    <>
      <div className="centering">
        <div id="gameBoard" className="flex-container"></div>
      </div>
      <div className="centering">
        Enter Your Name:{' '}
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
      </div>
      <div className="centering">
        {!isStarted && (
          <button disabled={name === ''} onClick={() => setIsStarted(true)}>
            start
          </button>
        )}
      </div>
    </>
  );
};
