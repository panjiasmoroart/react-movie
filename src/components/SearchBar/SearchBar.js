import React from "react";
class SearchBar extends React.Component {
  state = {
    value: "",
  };

  timeout = null;

  // function
  doSearch = (event) => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="h-28 bg-gray-900 flex items-center">
        <div className="container mx-auto relative text-white focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-2 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 rounded-full text-2xl py-3 px-16 text-white w-full sm:w-full"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
