import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
import { cocktails } from '../data.js'

class MainBox extends React.Component {

  state = {
    selectedItem: ""
  }

  handleSelect = (e) => {
    e.persist()
    // console.log(e.target.parentNode.querySelectorAll("a"))
    // e.target.parentNode.querySelectorAll("a").forEach(function(a){
    //   a.className = "item"
    // })

    if (e.target.tagName.toLowerCase() === "a"){
      this.setState({selectedItem: e.target.id})
    }
    else if (e.target.tagName.toLowerCase() === "i"){
      this.setState({selectedItem: e.target.id})
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

  // const detailsToDisplay = <div><this.state.selectedItem/></div>
  
  let detailsToDisplay
  switch(this.state.selectedItem) {
      case "photo":
        detailsToDisplay = <Photos/>
        break;

      case "profile":
        detailsToDisplay = <Profile/>
        break;

      case "pokemon":
        detailsToDisplay = <Pokemon/>
        break;

      case "cocktail":
        detailsToDisplay = <Cocktails/>
        break;

      default:
        detailsToDisplay = <div/>
        break;
    }
  

    return (
      <div>
        <MenuBar selectedItem={this.state.selectedItem} handleSelect={this.handleSelect} />
        {detailsToDisplay}

      </div>
    )
  }

}

export default MainBox
