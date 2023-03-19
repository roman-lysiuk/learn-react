import React from 'react';

type SearchState = {
  searchValue: string | null;
};
class Search extends React.Component<unknown, SearchState> {
  state = {
    searchValue: localStorage.getItem('searchValue'),
  };

  componentWillUnmount(): void {
    if (this.state.searchValue) localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    this.setState({ searchValue: currentValue });
  };

  render() {
    return (
      <div className="search">
        <input
          type={'search'}
          onChange={this.handleChange}
          className="search__input"
          placeholder="Start searching"
          value={this.state.searchValue || ''}
        ></input>
        <button className="btn btn_search">Search</button>
      </div>
    );
  }
}
export default Search;
