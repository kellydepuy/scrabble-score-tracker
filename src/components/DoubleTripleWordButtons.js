export default function DoubleTripleWordButtons() {
    return (
        <div className="double-triple-word-checkboxes">
            <div>
                <label htmlFor="doubleWordCheck">Double Word?</label>
                <input type="checkbox" id="doubleWordCheck"/>
            </div>
            <div>
                <label htmlFor="tripleWordCheck">Triple Word?</label>
                <input type="checkbox" id="tripleWordCheck"/>
            </div>
        </div>
    )
}