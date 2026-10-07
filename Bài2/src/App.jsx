import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  const handleInput = (value) => {
    if (value === 'Clear') {
      setDisplay('0')
    } else if (value === '=') {
      setDisplay((currentDisplay) => {
        try {
          if (currentDisplay !== '0' && currentDisplay !== '' && currentDisplay !== 'Lỗi') {
            const expression = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/')
            // Tính toán biểu thức an toàn
            const result = Function(`'use strict'; return (${expression})`)()
            return String(result)
          }
          return currentDisplay
        } catch (error) {
          return 'Lỗi'
        }
      })
    } else {
      setDisplay((currentDisplay) => {
        if (currentDisplay === '0' || currentDisplay === 'Lỗi') {
          if (['+', '-', '×', '÷', '*', '/'].includes(value)) {
            return '0' + value
          } else {
            return value
          }
        } else {
          return currentDisplay + value
        }
      })
    }
  }

  // Hỗ trợ phím từ bàn phím
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event
      if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'].includes(key)) {
        handleInput(key)
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault()
        handleInput('=')
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        handleInput('Clear')
      } else if (key === 'Backspace') {
        setDisplay((prev) => {
          if (prev.length <= 1 || prev === 'Lỗi') return '0'
          return prev.slice(0, -1)
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="calculator">
      <div id="calc-display">{display}</div>
      <div className="calc-keys">
        {/* Hàng 1 */}
        <button className="btn clear" onClick={() => handleInput('Clear')}>
          Clear
        </button>
        <button className="btn operator" onClick={() => handleInput('/')}>
          /
        </button>

        {/* Hàng 2 */}
        <button className="btn" onClick={() => handleInput('7')}>
          7
        </button>
        <button className="btn" onClick={() => handleInput('8')}>
          8
        </button>
        <button className="btn" onClick={() => handleInput('9')}>
          9
        </button>
        <button className="btn operator" onClick={() => handleInput('*')}>
          *
        </button>

        {/* Hàng 3 */}
        <button className="btn" onClick={() => handleInput('4')}>
          4
        </button>
        <button className="btn" onClick={() => handleInput('5')}>
          5
        </button>
        <button className="btn" onClick={() => handleInput('6')}>
          6
        </button>
        <button className="btn operator" onClick={() => handleInput('-')}>
          -
        </button>

        {/* Hàng 4 */}
        <button className="btn" onClick={() => handleInput('1')}>
          1
        </button>
        <button className="btn" onClick={() => handleInput('2')}>
          2
        </button>
        <button className="btn" onClick={() => handleInput('3')}>
          3
        </button>
        <button className="btn operator" onClick={() => handleInput('+')}>
          +
        </button>

        {/* Hàng 5 */}
        <button className="btn" onClick={() => handleInput('0')}>
          0
        </button>
        <button className="btn equal" onClick={() => handleInput('=')}>
          =
        </button>
      </div>
    </div>
  )
}

export default App

