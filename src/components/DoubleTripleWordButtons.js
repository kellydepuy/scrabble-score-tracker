export default function DoubleTripleWordButtons() {
    return (
        <div className="double-triple-word-checkboxes">
            <div className="double-triple">
                <label htmlFor="doubleWordCheck">Double Word?</label>
                <input type="checkbox" id="doubleWordCheck"/>
            </div>
            <div className="double-triple">
                <label htmlFor="tripleWordCheck">Triple Word?</label>
                <input type="checkbox" id="tripleWordCheck"/>
            </div>
        </div>
    )
}