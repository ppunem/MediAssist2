import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const FinalForm = () => (
  <div className="form-container2">
    <form className="fm2">
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
          <select className="custom-select" id="validationDefault04" required>
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
        className="btn btn-primary redeem-button"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Request Callback
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title thanking-customers-section-modal-title"
                id="exampleModalLabel"
              >
                Gift Voucher
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png"
                className="w-100"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
)

export default FinalForm
