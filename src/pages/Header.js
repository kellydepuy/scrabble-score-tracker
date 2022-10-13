

export default function Header() {
    return (
        <header>
            <div className="header-scrabble-container">
                <div id="s" className="header-scrabble-letter-div"><p className="header-scrabble-letter">S</p></div>
                <div id="c" className="header-scrabble-letter-div"><p className="header-scrabble-letter">C</p></div>
                <div id="r" className="header-scrabble-letter-div"><p className="header-scrabble-letter">R</p></div>
                <div id="a" className="header-scrabble-letter-div"><p className="header-scrabble-letter">A</p></div>
                <div id="b1" className="header-scrabble-letter-div"><p className="header-scrabble-letter">B</p></div>
                <div id="b2"className="header-scrabble-letter-div"><p className="header-scrabble-letter">B</p></div>
                <div id="l" className="header-scrabble-letter-div"><p className="header-scrabble-letter">L</p></div>
                <div id="e" className="header-scrabble-letter-div"><p className="header-scrabble-letter">E</p></div>
            </div>
            <p className="header-score-tracker">Score Tracker</p>
        </header>
    )
}