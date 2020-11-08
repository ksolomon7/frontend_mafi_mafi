import React from 'react'
import {Grid, Search} from 'semantic-ui-react'

class SearchBar extends React.Component{


    handleChange=(evt)=>{
        this.props.searchTermChange(evt.target.value)
    }

    render(){
        // console.log("in search term", this.props)
        return(
         
            <Grid>
                    <Grid.Column width={2}>
                    <Search
                    input={{ icon: 'search', iconPosition: 'left' }}
                    value={this.props.searchTerm}
                    onSearchChange={this.handleChange}
                    />
                    </Grid.Column>
          </Grid>
        )
    }
}

export default SearchBar