import React, { Component } from "react";

export class Card extends Component {
  render = () => {
    return (
      <li
        className={"card " + this.props.side}
        onClick={e => {
          e.stopPropagation();
          this.props.onNameClick(this.props.id);
        }}
      >
        <i
          className={"remove fas fa-ban" + (this.props.event ? "" : " hidden")}
          onClick={e => {
            e.stopPropagation();
            this.props.onRemove(this.props.id);
          }}
        />
        <i
          className="discard fas fa-arrow-circle-down"
          onClick={e => {
            e.stopPropagation();
            this.props.onDiscard(this.props.id);
          }}
        />
        {this.props.ops == null ? <i className="score fas fa-star-half-alt" /> : "\u00A0" + this.props.ops}{" "}
        {this.props.name}
      </li>
    );
  };
}
