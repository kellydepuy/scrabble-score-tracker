export default function PlayerWordLists(props) {   
    const html = props.wordList.map(el => (<div key={el.score + el.id} className="wordListWordDiv"><p>{el.word}  {el.score}</p> <button onClick={props.handleXButton} className="xButton" id={el.id}>X</button></div>))

    return (
        <div className="wordListDiv">
            <p className='score-header-name'>{props.name}</p>
            {html}
        </div>
    )
}