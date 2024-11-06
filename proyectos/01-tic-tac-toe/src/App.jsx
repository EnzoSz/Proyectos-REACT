import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

function App() {

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {

          board.map((_, index) => {
            return (
              <button className='square' key={index} onClick={() => handleClick(index)}>
                {board[index]}
              </button>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
