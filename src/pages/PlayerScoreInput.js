import LetterInput from "./LetterInput";
// would like to refactor to make this more concise
export default function PlayerScoreInput(props) {
    return (
        <div className="player-score-input-container">
            <LetterInput 
                letterId="letter1"
                dLetterId="dLetter1"
                tLetterId="tLetter1"
                default="default1"
                name="doubleTriple1"
                placeholder="S"
            />
            <LetterInput 
                letterId="letter2"
                dLetterId="dLetter2"
                tLetterId="tLetter2"
                default="default2"
                name="doubleTriple2"
                placeholder="C"
            />
            <LetterInput 
                letterId="letter3"
                dLetterId="dLetter3"
                tLetterId="tLetter3"
                default="default3"
                name="doubleTriple3"
                placeholder="R"
            />
            <LetterInput 
                letterId="letter4"
                dLetterId="dLetter4"
                tLetterId="tLetter4"
                default="default4"
                name="doubleTriple4"
                placeholder="A"
            />
            <LetterInput 
                letterId="letter5"
                dLetterId="dLetter5"
                tLetterId="tLetter5"
                default="default5"
                name="doubleTriple5"
                placeholder="B"
            />
            <LetterInput 
                letterId="letter6"
                dLetterId="dLetter6"
                tLetterId="tLetter6"
                default="default6"
                name="doubleTriple6"
                placeholder="B"
            />
            <LetterInput 
                letterId="letter7"
                dLetterId="dLetter7"
                tLetterId="tLetter7"
                default="default7"
                name="doubleTriple7"
                placeholder="L"
            />
            <LetterInput 
                letterId="letter8"
                dLetterId="dLetter8"
                tLetterId="tLetter8"
                default="default8"
                name="doubleTriple8"
                placeholder="E"
            />
            <LetterInput 
                letterId="letter9"
                dLetterId="dLetter9"
                tLetterId="tLetter9"
                default="default9"
                name="doubleTriple9"
            />
            <LetterInput 
                letterId="letter10"
                dLetterId="dLetter10"
                tLetterId="tLetter10"
                default="default10"
                name="doubleTriple10"
            />
        </div>
    )
}