import React from 'react'

class SearchBar extends React.Component {
  state = { searchTerm: '' }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }
  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.searchTerm)
    //make sure to pass callback to parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search on YouTube</label>
            <input
              onChange={this.onInputChange}
              value={this.state.searchTerm}
              placeholder="Korean street food"
              type="text"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
