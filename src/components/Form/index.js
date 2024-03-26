import {Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class Form extends Component {
  state = {isModalOpen: false}

  toggleModal = () => {
    this.setState(prevState => ({isModalOpen: !prevState.isModalOpen}))
  }

  callAlert = () => alert("You'll receive a call back")

  render() {
    const {isModalOpen} = this.state

    return (
      <div className="form-container1">
        <form className="fm1">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">First name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value="Mark"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault02">Last name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                value="Otto"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault04">State</label>
              <select
                className="custom-select"
                id="validationDefault04"
                required
              >
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationDefault05">Zip</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.toggleModal}
          >
            Request Callback
          </button>
          {isModalOpen && this.callAlert()}
        </form>
      </div>
    )
  }
}

export default Form
