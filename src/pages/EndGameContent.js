import { useEffect } from "react"
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

export default function EndGameContent(props) {
  
    const scores = props.stats.playerScoresArray
    const sortedScores = scores.sort(function(a, b){return a-b})
    const highestScore = sortedScores[3]

    let nameOfWinner;
    let winner = ""
    let numOfWinner = 0

 //This function sets or updates the data in local storage. It takes the player name and winner's name.
    function setLocalStorage(player, winnerName) {
        const prevData = JSON.parse(localStorage.getItem(player)) 
        console.log(`previous data is ${prevData}`)
        if (player === winnerName) {
            if (prevData) {
                localStorage.setItem([player], JSON.stringify({name: player, wins: prevData.wins + 1, losses: prevData.losses}))
            } else {
                localStorage.setItem([player], JSON.stringify({name: player, wins: 1, losses: 0}))
            }
            
        } else {
            if (prevData) {
                localStorage.setItem([player], JSON.stringify({name: player, wins: prevData.wins, losses: prevData.losses + 1}))
            } else {
                localStorage.setItem([player], JSON.stringify({name: player, wins: 0, losses: 1}))
            }
        }
    }

    for (let i = 0; i < sortedScores.length; i++) {
        if (sortedScores[i] === highestScore) {
            numOfWinner++
        }
    }
/* I had to pull out useEffect here to ensure stats were updated once and only once. The alternative 
would be to move a lot the the code in here into the app component and having this code trigger on 
the end game button click, but the app component already feels very cluttered to me.*/

    useEffect(() => {
        if (numOfWinner > 1) {
            winner = "players! It's a tie!"
        } else if (props.stats.playerOne.playerOneScore === highestScore) {
            winner = props.stats.playerOne.playerOneName + '! You won!'
            nameOfWinner = props.stats.playerOne.playerOneName
        } else if (props.stats.playerTwo.playerTwoScore === highestScore){
            winner = props.stats.playerTwo.playerTwoName + '! You won!'
            nameOfWinner = props.stats.playerTwo.playerTwoName
        } else if (props.stats.playerThree.playerThreeScore === highestScore ) {
            winner = props.stats.playerThree.playerThreeName + '! You won!'
            nameOfWinner =props.stats.playerThree.playerThreeName
        } else {
            winner = props.stats.playerFour.playerFourName + '! You won!'
            nameOfWinner= props.stats.playerFour.playerFourName
        }
    
     
        if (props.numPlayers === 1) {
            setLocalStorage(props.stats.playerOne.playerOneName, nameOfWinner)
        } else if (props.numPlayers === 2) {
            setLocalStorage(props.stats.playerOne.playerOneName, nameOfWinner)
            setLocalStorage(props.stats.playerTwo.playerTwoName, nameOfWinner)
        } else if (props.numPlayers === 3) {
            setLocalStorage(props.stats.playerOne.playerOneName, nameOfWinner)
            setLocalStorage(props.stats.playerTwo.playerTwoName, nameOfWinner)
            setLocalStorage(props.stats.playerThree.playerThreeName, nameOfWinner)
        } else {
            setLocalStorage(props.stats.playerOne.playerOneName, nameOfWinner)
            setLocalStorage(props.stats.playerTwo.playerTwoName, nameOfWinner)
            setLocalStorage(props.stats.playerThree.playerThreeName, nameOfWinner)
            setLocalStorage(props.stats.playerFour.playerFourName, nameOfWinner)
        }
    }, [])


    return(
        <div className="end-game-content">
            <ScrollToTop />
            <p className="congrats-text">Congratulations {winner}</p>
            <div className="end-game-scores-div">
                <p className="scores-text">{props.stats.playerOne.playerOneName}'s Score was {props.stats.playerOne.playerOneScore}</p>
                {props.numPlayers > 1 && <p className="scores-text">{props.stats.playerTwo.playerTwoName}'s Score was {props.stats.playerTwo.playerTwoScore}</p>}
                {props.numPlayers > 2 && <p className="scores-text">{props.stats.playerThree.playerThreeName}'s Score was {props.stats.playerThree.playerThreeScore}</p>}
                {props.numPlayers > 3 && <p className="scores-text">{props.stats.playerFour.playerFourName}'s Score was {props.stats.playerFour.playerFourScore}</p>}
            </div>
            
            <p className="scores-text">The best word was {props.stats.bestWord.bestWord} played by {props.stats.bestWord.playerName} and scored {props.stats.bestWord.bestScore} points!</p>
            <Link to="/">
                <button onClick={props.handlePlayAgain} id="play-again-button">Play Again?</button>
            </Link>
        </div>
    )
}