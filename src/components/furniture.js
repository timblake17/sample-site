import React, { Component } from 'react';
import data from './furniture.json';
import './movies.css'



class Furniture extends React.Component  {
  constructor(){
    super();

    this.state = {
      show:['featured']
  };
  }

addType(e, title){
  if(e.target.checked){
  this.setState({
    show: [...this.state.show, title]})
  }else{
    var index = this.state.show.indexOf(title);
    if (index > -1) {
    this.state.show.splice(index, 1);
    this.setState({
      show: [...this.state.show,'featured']})
    }

  }
}

showAll() {
  this.setState({show:['couch','table','recliner','chair','featured']});

};

  clearFilters() {
    this.setState({show:'featured'})
    var x = document.getElementsByClassName("checkboxId");
    for (var i = 0; i < x.length; i++) {
        x[i].checked = false;;
    }}


  render() {
    return (

      <div className="movies-books-container">
        <div className="checkBoxes" >
          <input className="checkboxId" type="Checkbox" name="book" name="check-1" id="check-1" onClick={(e) => this.addType(e,'couch')}/>
            <label for="check-1">Couches</label>
          <input className="checkboxId" type="Checkbox" name="check-2" id="check-2" onClick={(e) => this.addType(e,'table')}/>
            <label for="check-2">Coffee Tables</label>
          <input className="checkboxId" type="Checkbox" name="check-3" id="check-3"  onClick={(e) => this.addType(e,'recliner')}/>
            <label for="check-3">Recliners</label>
          <input className="checkboxId" type="Checkbox" name="check-4" id="check-4" onClick={(e) => this.addType(e,'chair')}/>
            <label for="check-4">Chairs</label>
        </div>
        <div className="button-container">
          <button onClick={(e) => this.showAll(e)} type="button">Show All</button>
          <button onClick={(e) => this.clearFilters(e)} type="button">Clear Filters</button>
        </div>
        <ul className="furniture-list">
        {
          data.media.map(furniture=>{
          if (furniture.type.includes('couch') && this.state.show.includes ('couch')) {
          return <li key={furniture.title}>{furniture.title}
            <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link} target="_blank">Buy</a></li>
          }else if (furniture.type.includes('table') && this.state.show.includes ('table')) {
            return <li key={furniture.title}>{furniture.title}
            <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link} target="_blank">Buy</a></li>
          }else if (furniture.type.includes('recliner') && this.state.show.includes ('recliner')) {
            return <li key={furniture.title}>{furniture.title}
            <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link} target="_blank" >Buy</a></li>
          }else if (furniture.type.includes('chair') && this.state.show.includes ('chair')) {
            return <li key={furniture.title}>{furniture.title}
            <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link} target="_blank">Buy</a></li>
          }else if (furniture.type.includes('featured') && this.state.show.includes ('featured')) {
              return <li key={furniture.title}>{furniture.title}
              <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link} target="_blank">Buy</a></li>
              }
            })
          }
          </ul>
        </div>
    )
  }
}

export default Furniture;
