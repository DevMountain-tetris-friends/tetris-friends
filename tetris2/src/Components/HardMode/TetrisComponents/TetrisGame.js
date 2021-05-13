import React, { useState, useSelector } from 'react';

import {updateUser} from '../../../redux/userReducer';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

// Import Stage, Collision, and Styling
import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetrisGame } from './styles/StyledTetrisGame';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { StyledStartButton } from './styles/StyledStartButton';

const Tetris = (props) => {

    const {user, updateUser } = props

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 600);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const updateHighScore = (user) => {
    axios.put("/auth/userUpdate", user)
    .then(res => {
        updateUser(res.data);
        })
    .catch(err => console.log(err))
    }

  if(gameOver == true && user.highest_score < score){
    user.highest_score = score

    
    
      updateHighScore(user)
      console.log("Something Stupid");
  }

  

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  console.log(user.highest_score);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetrisGame>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <div>
            <Display gameOver={gameOver} text="Game Over" />
            <Link to={'/mainpage'}><StyledStartButton>Main Page</StyledStartButton></Link>
            </div>
            
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetrisGame>
    </StyledTetrisWrapper>
  );
};

const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps, {updateUser})(Tetris);
