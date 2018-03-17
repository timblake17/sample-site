// clearFilters() {
//   this.setState({show:''})
//   this.setState({genre:''})
// }
//

//
// handleCheckboxMovies(e){
//   if (e.target.checked){
//     this.setState({show:'movies'});}
//     else{
//       this.clearFilters(e)
//     }
//   }
//
// handleCheckboxAction(e){
//   if (e.target.checked){
//     this.setState({genre:'action'});}
//     else{
//       this.clearFilters(e)
//     }
//   }
//
// handleCheckboxComedy(e){
//   if (e.target.checked){
//     this.setState({genre:'comedy'});}
//     else{
//       this.clearFilters(e)
//     }
//   }
//
// handleCheckboxAnimation(e){
//   if (e.target.checked){
//     this.setState({genre:'animation'});}
//     else{
//       this.clearFilters(e)
//     }
//   }

handleCheckboxAdventure(e){
  if (e.target.checked){
    this.setState({genre:'adventure'});}
    else{
      this.clearFilters(e)
    }
  }
