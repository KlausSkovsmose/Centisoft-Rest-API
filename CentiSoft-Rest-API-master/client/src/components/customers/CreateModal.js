import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { createCustomer } from "../../actions/customersActions";

class CreateModal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      address2: "",
      zip: "",
      city: "",
      country: "",
      phone: "",
      email: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newCustomer = {
      name: this.state.name,
      address: this.state.address,
      address2: this.state.address2,
      zip: this.state.zip,
      city: this.state.city,
      country: this.state.country,
      phone: this.state.phone,
      email: this.state.email
    };

    this.props.createCustomer(newCustomer);
  }

  render() {
    const { errors } = this.state;
    if (!this.props.show) {
      return null;
    }

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create a New Customer
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
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className={classnames("form-control", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    className={classnames("form-control", {
                      "is-invalid": errors.address
                    })}
                    placeholder="Address"
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address2"
                    className={classnames("form-control", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Address 2"
                    value={this.state.address2}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.address2}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="zip"
                    className={classnames("form-control", {
                      "is-invalid": errors.zip
                    })}
                    placeholder="ZIP"
                    value={this.state.zip}
                    onChange={this.onChange}
                  />
                  {errors.zip && (
                    <div className="invalid-feedback">{errors.zip}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="city"
                    className={classnames("form-control", {
                      "is-invalid": errors.city
                    })}
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                  {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    className={classnames("form-control", {
                      "is-invalid": errors.country
                    })}
                    placeholder="Country"
                    value={this.state.country}
                    onChange={this.onChange}
                  />
                  {errors.country && (
                    <div className="invalid-feedback">{errors.country}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    className={classnames("form-control", {
                      "is-invalid": errors.phone
                    })}
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={classnames("form-control", {
                      "is-invalid": errors.email
                    })}
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <input
                  type="submit"
                  value="Create Customer"
                  className="btn input-sm btn-success btn-block mt-4"
                />
              </form>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createCustomer }
)(CreateModal);
