import React from 'react'



class Pet extends React.Component {

  findGender = {
    male: '♂',
    female: '♀'
  }

  displayButton = {
    false: "ui disabled button",
    true: "ui primary button"
  }



  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.findGender[this.props.pet.gender]}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.displayButton[this.props.pet.isAdopted]}>Already adopted</button>
          <button className={this.displayButton[!this.props.pet.isAdopted]} onClick={()=>this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
