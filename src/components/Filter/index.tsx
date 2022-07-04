import { listenerCount } from 'process'
import React from 'react'
import { Container } from './styles'

const Filter = ({ selectedFilter, updateFilter }) => {
  const handleClick = (selected) => {

    updateFilter(selected)
  }
  return(
    <Container>
      <p>2 Items</p>
      <div className="filter">
        <button 
          aria-label="All"
          value="all"
          className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''}`}
          onClick={() => handleClick('all')}
        >
          All
        </button>
        <button 
          aria-label="Active"
          value="active"
          className={`filter-option ${selectedFilter === 'active' ? 'selected' : ''}`}
          onClick={() => handleClick('active')}
        >
          Active
        </button>
        <button
          aria-label="Completed"
          value="completed"
          className={`filter-option ${selectedFilter === 'completed' ? 'selected' : ''}`}
          onClick={() => handleClick('completed')}
        >
          Completed
        </button>
      </div>
      <p>Clear completed</p>
    </Container>
  )
}

export default Filter