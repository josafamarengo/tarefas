import React from 'react'
import { Container } from './styles'

const Filter = ({ selectedFilter, updateFilter, getTasks }) => {
  const handleClick = (selected) => {

    updateFilter(selected)
  }
  return(
    <Container>
        <button
          aria-label="All"
          value="all"
          className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''}`}
          onClick={() => getTasks('all')}
        >
          All
        </button>
        <button
          aria-label="Active"
          value="active"
          className={`filter-option ${selectedFilter === 'active' ? 'selected' : ''}`}
          onClick={() => getTasks('active')}
        >
          Active
        </button>
        <button
          aria-label="Completed"
          value="completed"
          className={`filter-option ${selectedFilter === 'completed' ? 'selected' : ''}`}
          onClick={() => getTasks('completed')}
        >
          Completed
        </button>
    </Container>
  )
}

export default Filter
