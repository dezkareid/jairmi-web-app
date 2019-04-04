import React from 'react'
import { render } from 'react-dom'
import { App } from './App/App'

export default function bootstrap (appContainer) {
  render(<App />, appContainer)
}
