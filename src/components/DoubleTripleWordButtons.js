export default function DoubleTripleWordButtons() {
    return (
        <div>
            <label htmlFor="doubleWordCheck">Activate Double Word?</label>
            <input type="checkbox" id="doubleWordCheck"/>
            <label htmlFor="tripleWordCheck">Activate Triple Word?</label>
            <input type="checkbox" id="tripleWordCheck"/>
        </div>
    )
}