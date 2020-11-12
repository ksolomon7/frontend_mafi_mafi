import React from 'react'
import { Search} from 'semantic-ui-react'

class SearchBar extends React.Component{


    handleChange=(evt)=>{
        this.props.searchTermChange(evt.target.value)
    }

    render(){
        // console.log("in search term", this.props)
        return(
         
            <div>
                    <Search
                    style={{diplay:'block'}}
                    input={{ icon: 'search', iconPosition: 'left' }}
                    placeholder="Search Products"
                    value={this.props.searchTerm}
                    onSearchChange={this.handleChange}
                    className= "search bar"
                    />
          </div>
        )
    }
}

export default SearchBar