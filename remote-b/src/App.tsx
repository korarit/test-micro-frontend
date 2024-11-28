import './App.css'

interface AppProps {
  addCount: () => void;
}
function App({ addCount }: AppProps) {

  return (
    <>
      <button onClick={addCount} style={{
        padding: '10px',
        margin: '10px',
        fontSize: '20px',
        background: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>Add Count</button>
    </>
  )
}

export default App
