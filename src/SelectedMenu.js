import React, { Component } from 'react';
import PropTypes from 'prop-types';
import model from './model';

class SelectedMenu extends Component {
  static copyToClipboard() {
    document.execCommand('copy');
  }

  constructor(props) {
    super(props);
    this.addItems = this.addItems.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.removeSelected = this.removeSelected.bind(this);
    this.state = {
      subMenu: {
        display: 'none',
      },
      caret: {
        display: 'none',
      },
      selectedText: '',
      items: this.props.items,
      id: this.props.children.substring(0, 20).replace(' ', '_'),
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.removeSelected);
    document.getElementById(`_selectedText${this.state.id}`).addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${this.state.id}`).addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${this.state.id}`).onmousedown = (e) => {
      e.preventDefault();
    };
    document.getElementById(`_selectedText${this.state.id}`).addEventListener('mouseup', this.handleSelected);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.removeSelected);
    document.getElementById(`_selectedText${this.state.id}`).removeEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${this.state.id}`).removeEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.getElementById(`_beacon${this.state.id}`).onmousedown = (e) => {
      e.preventDefault();
    };
    document.getElementById(`_selectedText${this.state.id}`).removeEventListener('mouseup', this.handleSelected);
  }

  addItems() {
    const items = this.state.items.filter(e => Object.keys(model).includes(e));
    const links = items.map((e, i) => {
      if (!model[e]) {
        throw new Error(`Invalid item : ${e}`);
      } else if (e === 'clippy') {
        return (
          <a
            key={e}
            role="link"
            tabIndex={i}
            onClick={this.copyToClipboard}
            style={{ cursor: 'pointer' }}
          >
            { model[e].icon }
          </a>
        );
      } else {
        const href = model[e].link + this.state.selectedText;
        return (
          <a
            key={e}
            tabIndex={i}
            href={href}
            target="_blank"
          >
            { model[e].icon }
          </a>
        );
      }
    }, this);
    return links;
  }

  removeSelected() {
    this.setState({
      subMenu: { display: 'none' },
      caret: { display: 'none' },
      selectedText: '',
    });
  }

  handleSelected() {
    const s = document.getSelection();
    const r = s.getRangeAt(0);
    const p = r.getBoundingClientRect();
    if (p.left !== p.right) {
      const widthMenu = 40 * this.state.items.length;
      const middle = (p.right - p.left) / 2;
      const m = (p.left + middle - (widthMenu / 2)).toString();
      const t = (p.top - 50).toString();
      const tCarret = (p.top - 50 + 35).toString();
      const mCarret = (p.left + middle - 10).toString();
      this.setState({
        subMenu: {
          position: 'absolute',
          justifyContent: 'space-around',
          fontSize: 'x-large',
          backgroundColor: 'rgba(0,0,0,.8)',
          width: `${widthMenu.toString()}px`,
          height: '35px',
          left: `${m}px`,
          top: `${t}px`,
          borderRadius: '5px',
          display: 'flex',
        },
        caret: {
          borderStyle: 'solid',
          borderWidth: '10px 10px 0px 10px',
          borderBottomColor: 'transparent',
          borderLeftColor: 'transparent',
          borderTopColor: 'rgba(0,0,0,.8)',
          borderRightColor: 'transparent',
          width: '0px',
          height: '0px',
          display: 'block',
          position: 'absolute',
          top: `${tCarret}px`,
          left: `${mCarret}px`,
        },
        selectedText: s.toString(),
      });
    } else {
      this.setState({
        subMenu: { display: 'none' },
        caret: { display: 'none' },
        selectedText: '',
      });
    }
  }

  render() {
    return (<div>
      <div id={`_selectedText${this.state.id}`}>{this.props.children}</div>
      <div id={`_beacon${this.state.id}`} style={this.state.subMenu}>
        {this.addItems()}
      </div>
      <div style={this.state.caret} />
    </div>);
  }
}

SelectedMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  children: PropTypes.string.isRequired,
};
export default SelectedMenu;
