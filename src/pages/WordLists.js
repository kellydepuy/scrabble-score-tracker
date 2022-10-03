import PlayerWordLists from "./PlayerWordLists"
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

export default function WordLists(props) {

    return (

        <div>
            <ScrollToTop />
            <PlayerWordLists handleXButton={props.handleXButton} wordList={props.listOfWordsP1} name={props.playersArray[0]}/>
            {props.numPlayers > 1 && <PlayerWordLists handleXButton={props.handleXButton} wordList={props.listOfWordsP2} name={props.playersArray[1]}/>}
            {props.numPlayers > 2 && <PlayerWordLists handleXButton={props.handleXButton} wordList={props.listOfWordsP3} name={props.playersArray[2]}/>}
            {props.numPlayers > 3 && <PlayerWordLists handleXButton={props.handleXButton} wordList={props.listOfWordsP4} name={props.playersArray[3]}/>}
            <Link className="button-styled-link" to="/tracker">Return to Tracker</Link>
        </div>
    )
}