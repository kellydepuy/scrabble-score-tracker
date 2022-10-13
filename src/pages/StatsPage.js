import ScrollToTop from "./ScrollToTop"
import { Link } from "react-router-dom"

export default function StatsPage() {
    const storageKeys = Object.keys(localStorage)
    const tableHtml = storageKeys.map((el) => {

        const currentEl = JSON.parse(localStorage.getItem(el))
// This is my temporary way of 'fixing' a bug. Some erroneous data is showing up in local storage.
        if (currentEl.name) {
            return <tr key={currentEl.name}>
            <td>{currentEl.name}</td>
            <td>{currentEl.wins}</td>
            <td>{currentEl.losses}</td>
        </tr>
        }
    })

    return (
        <div className="stats-page-div">
            <ScrollToTop />
            <table className="table">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Total Wins</th>
                        <th>Total Losses</th>
                    </tr>
                    <tr className="hidden">
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                    </tr>
                </thead>
                <tbody>
                    {tableHtml}
                </tbody>

            </table>
            <Link className="player-stats-btn button-styled-link" to="/">Return to Home</Link>
        </div>
    )
}