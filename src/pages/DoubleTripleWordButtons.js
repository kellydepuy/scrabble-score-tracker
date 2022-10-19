export default function DoubleTripleWordButtons() {
    return (
        <div className="double-triple-word-checkboxes">
            <div className="double-triple">
                <label htmlFor="doubleWordCheck">Double Word?</label>
                <input name="doubleWordBox" type="number" max="8" min="0" id="doubleWordCheck"/>
            </div>
            <div className="double-triple">
                <label htmlFor="tripleWordCheck">Triple Word?</label>
                <input name="tripleWordBox" type="number" max="8" min="0"  id="tripleWordCheck"/>
            </div>
        </div>
    )
}