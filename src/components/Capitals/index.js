import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0]}

  selectCountry = event => {
    console.log(event.target.value)

    const getObjectOfCountry = countryAndCapitalsList.find(
      each => each.id === event.target.value,
    )
    console.log(getObjectOfCountry)
    this.setState({countryId: getObjectOfCountry})
  }

  render() {
    const {countryId} = this.state

    return (
      <div className="cg-con">
        <div className="dg-con">
          <h1 className="">Countries and capitals</h1>
          <div className="select-con">
            <select value={countryId.id} onChange={this.selectCountry}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>

          <p>{countryId.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
