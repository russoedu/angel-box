import React from 'react';

export default class ListRow extends React.Component {
  render() {
    return (
      <div className="list-group-item">
        <button className="btn btn-danger btn-sm btn-delete" id={this.props.item._id} onClick={this.props.onDelete} type="button" value="Delete">&times;</button>
        <span className="lead item-description" id={this.props.item._id} onClick={this.props.onUpdate}>{this.props.item.desc}</span>
      </div>
    );
  }
}
