import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <>
        <div className="mb-4 mt-2 bg-color-aqua">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.addItem(
                this.state.productName,
                Number(this.state.productPrice)
              );
            }}
          >
            <div className="mb-3 col-4 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                aria-describedby="emailHelp"
                name="productName"
                onChange={(e) => {
                  this.setState({ productName: e.currentTarget.value });
                }}
                value={this.state.productName}
              />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Price
              </label>
              <input type="number" className="form-control" id="productPrice"
              name="productPrice"
                onChange={(s)=>{
                    this.setState({productPrice:s.currentTarget.value});
                }}
                value={this.state.productPrice} />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default AddItem;
