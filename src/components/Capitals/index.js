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
  state = {countryId: countryAndCapitalsList[0].id}

  selectCountry = event => {
    this.setState({countryId: event.target.value})
  }

  getCountryFunc = () => {
    const {countryId} = this.state
    const countryObj = countryAndCapitalsList.find(
      each => each.id === countryId,
    )
    console.log(countryObj)
    return countryObj
  }

  render() {
    const {countryId} = this.state
    const getCountry = this.getCountryFunc()

    return (
      <div className="cg-con">
        <div className="dg-con">
          <h1 className="">Countries and capitals</h1>
          <div className="select-con">
            <select value={countryId} onChange={this.selectCountry}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>

          <p>{getCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
