import React, { Component } from 'react';
import data from './furniture.json';
import './movies.css'



class Furniture extends React.Component  {
  constructor(){
    super();

    this.state = {
      show:[]
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
      show: [...this.state.show,]})
    }

  }
}

showAll() {
  this.setState({show:['couch','table','recliner','chair']});

};

  clearFilters() {
    this.setState({show:''})
    this.setState({genre:''})
    var x = document.getElementsByClassName("checkboxId");
    for (var i = 0; i < x.length; i++) {
        x[i].checked = false;;
    }}


  render() {
    return (

      <div className="movies-books-container">

        <div  >
          <label><input className="checkboxId" type="Checkbox" name="book" value="" onClick={(e) => this.addType(e,'couch')} />
          Couches</label>
          <label><input className="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.addType(e,'table')}/>
          Coffee Tables</label>
          <label><input className="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.addType(e,'recliner')}/>
          Recliners</label>
          <label><input className="checkboxId" type="Checkbox" name="movies" value="" onClick={(e) => this.addType(e,'chair')}/>
          Chair</label>
        </div>
        <div>
        <button onClick={(e) => this.showAll(e)} type="button">Show All</button>

        <button onClick={(e) => this.clearFilters(e)} type="button">Clear Filters</button>
        </div>
          <ul>
          {
            data.media.map(furniture=>{
            if (furniture.type.includes('couch') && this.state.show.includes ('couch')) {
            return <li key={furniture.title}>{furniture.title}
              <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link}>Buy</a></li>
            }else if (furniture.type.includes('table') && this.state.show.includes ('table')) {
              return <li key={furniture.title}>{furniture.title}
              <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link}>Buy</a></li>
            }else if (furniture.type.includes('recliner') && this.state.show.includes ('recliner')) {
              return <li key={furniture.title}>{furniture.title}
              <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link}>Buy</a></li>
            }else if (furniture.type.includes('chair') && this.state.show.includes ('chair')) {
              return <li key={furniture.title}>{furniture.title}
              <img src={furniture.img} alt="" />{furniture.price}<a href={furniture.link}>Buy</a></li>
              }
            })
          }

      </ul>
    </div>
    )
  }
}

export default Furniture;
