import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CreateOp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: 'Select Doctor'
    }
  }
  render() {
    const { doc } = this.state;
    return (
      <div>
        <h4>Create OP</h4> <div class="form-group">
          <label for="usr">Name:</label>
          <input type="text" class="form-control" id="usr" />
        </div>
        <div class="form-group">
          <label for="usr">Age:</label>
          <input type="text" class="form-control" id="usr" />
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optradio" />Male
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optradio" />Female
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optradio" />Others
  </label>
        </div>
        <div class="form-group">
          <label for="usr">Problem:</label>
          <input type="text" class="form-control" id="usr" />
        </div>
        <div class="form-group">
          <label for="comment">Address</label>
          <textarea class="form-control" rows="5" id="comment"></textarea>
        </div>
        <div class="form-group">
          <label for="usr">Mobile:</label>
          <input type="text" class="form-control" id="usr" />
        </div>

        <div>
          <select defaultValue={doc}
            onChange={this.getDropValue}
          >
            <option value="notSelected">Select Doctor</option>
            <option value="Inthiyaz">Shaik Inthiyaz </option>
            <option value="Nandhu">Nandhu</option>
            <option value="Mukesh">Mukesh</option>
            <option value="Surekha">Surekha</option>
          </select>
        </div>
        <h6>Select Lab Tests</h6>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 1
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 2
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 3
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 4
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 5
  </label>
        </div>
        <div class="form-check-inline">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value="" />Option 6
  </label>
        </div>
        <div>
          <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
        </div>
      </div>
    )
  }
}