import { Square } from "./Square";
export function WinnerModal ({ winner, resetGame }) {
    if (!winner) return null;
    const winnerText = winner === false ? 'Empate' : 'Ganó'
    return (
        <section className="winner">
          <div className="text">
            <h2>
            {winnerText}
            
            </h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Comenzar de nuevo</button>
            </footer>
          </div>
        </section>
    );
}