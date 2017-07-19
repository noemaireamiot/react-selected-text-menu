import React, {Component} from 'react';
import {FaGoogle, FaTwitter, FaFacebook, FaWikipediaW, FaGithub, FaAmazon, FaYahoo, FaPinterestP, FaYoutubeSquare, FaLastfm, FaMapMarker, FaYelp, FaTripadvisor, FaSoundcloud, FaRedditAlien} from 'react-icons/lib/fa';
import {GoClippy} from 'react-icons/lib/go';


class SelectedMenu extends Component {
  constructor(props) {
         super(props);
         this.addItems = this.addItems.bind(this);
         this.handleSelected = this.handleSelected.bind(this);
         this.removeSelected = this.removeSelected.bind(this);
         this.copyToClipboard = this.copyToClipboard.bind(this);
         this.state = {
             subMenu: {
               display: 'none',
             },
             caret: {
                 display: 'none',
             },
             selectedText: '',
             items: this.props.items,
             id: this.props.children.substring(0, 20).replace(' ', '_')
         };
     }

       componentDidMount() {
         document.addEventListener('click', this.removeSelected);
         document.getElementById('_selectedText' + this.state.id).addEventListener('click', function(event){
           event.stopPropagation();
         });
         document.getElementById('_beacon' + this.state.id).addEventListener('click', function(event){
           event.stopPropagation();
         });
         document.getElementById('_beacon' + this.state.id).onmousedown = function(e){
            e.preventDefault();
          }
         document.getElementById('_selectedText' + this.state.id).addEventListener('mouseup', this.handleSelected);
       }

       componentWillUnmount() {
         document.removeEventListener('click', this.removeSelected);
         document.getElementById('_selectedText' + this.state.id).removeEventListener('click', function(event){
           event.stopPropagation();
         });
         document.getElementById('_beacon' + this.state.id).removeEventListener('click', function(event){
           event.stopPropagation();
         });
         document.getElementById('_beacon' + this.state.id).onmousedown = function(e){
            e.preventDefault();
          }
         document.getElementById('_selectedText' + this.state.id).removeEventListener('mouseup', this.handleSelected);
       }

       copyToClipboard () {
         document.execCommand('copy');
       }

       addItems() {
              return (this.state.items.map(function(item, i) {
                switch (item) {
                  case 'google':
                    return <a key={i} href={'http://www.google.com/search?q=' + this.state.selectedText} target='_blank'><FaGoogle color="white"/></a>;
                    break;
                  case 'wikipedia':
                    return <a key={i} href={'https://en.wikipedia.org/wiki/' + this.state.selectedText} target='_blank'><FaWikipediaW color="white"/></a>;
                    break;
                  case 'github':
                    return <a key={i} href={'https://github.com/search?utf8=%E2%9C%93&q=' + this.state.selectedText} target='_blank'><FaGithub color="white"/></a>;
                    break;
                  case 'amazon':
                    return <a key={i} href={'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=' + this.state.selectedText} target='_blank'><FaAmazon color="white"/></a>;
                    break;
                  case 'yahoo':
                    return <a key={i} href={'https://search.yahoo.com/search;_ylt=A0oG7l7PeB5P3G0AKASl87UF?p=' + this.state.selectedText} target='_blank'><FaYahoo color="white"/></a>;
                    break;
                  case 'pinterest':
                    return <a key={i} href={'https://pinterest.com/search/pins/?q=' + this.state.selectedText} target='_blank'><FaPinterestP color="white"/></a>;
                    break;
                  case 'youtube':
                    return <a key={i} href={'https://www.youtube.com/results?search_query=' + this.state.selectedText} target='_blank'><FaYoutubeSquare color="white"/></a>;
                    break;
                  case 'lastfm':
                    return <a key={i} href={'https://www.last.fm/fr/search?q=' + this.state.selectedText} target='_blank'><FaLastfm color="white"/></a>;
                    break;
                  case 'maps':
                    return <a key={i} href={'https://www.google.fr/maps/search/' + this.state.selectedText} target='_blank'><FaMapMarker color="white"/></a>;
                    break;
                  case 'yelp':
                    return <a key={i} href={'https://www.yelp.com/search?find_desc=' + this.state.selectedText} target='_blank'><FaYelp color="white"/></a>;
                    break;
                  case 'tripadvisor':
                    return <a key={i} href={'https://www.tripadvisor.com/Search?q=' + this.state.selectedText} target='_blank'><FaTripadvisor color="white"/></a>;
                    break;
                  case 'soundcloud':
                    return <a key={i} href={'https://soundcloud.com/search?q=' + this.state.selectedText} target='_blank'><FaSoundcloud color="white"/></a>;
                    break;
                  case 'reddit':
                    return <a key={i} href={'https://www.reddit.com/search?q=' + this.state.selectedText} target='_blank'><FaRedditAlien color="white"/></a>;
                    break;
                  case 'clippy':
                    return <a key={i} onClick={this.copyToClipboard()} style={{cursor: 'pointer'}}><GoClippy color="white"/></a>;
                    break;
                  default:
                    throw new Error('Invalid item : ' + item);
                }
              }, this))
         }

       removeSelected(e) {
         this.setState({
           subMenu: {display: 'none'},
           caret: {display: 'none'},
           selectedText: ''
         });
       }

       handleSelected(e) {
         let s = document.getSelection();
         let r = s.getRangeAt(0);
         let p = r.getBoundingClientRect();
         if (p.left != p.right)
         {
           let widthMenu = 40 * this.state.items.length;
           let middle = (p.right - p.left) / 2;
           let m = (p.left + middle - (widthMenu / 2)).toString();
           let t = (p.top - 50).toString();
           let tCarret = (p.top - 50 + 35).toString();
           let mCarret = (p.left + middle - 10).toString();
           this.setState({
             subMenu: {position: 'absolute', justifyContent: 'space-around', fontSize: 'x-large', backgroundColor: 'rgba(0,0,0,.8)', width: widthMenu.toString() + 'px', height: '35px', left: m + 'px', display: 'block', top: t + 'px', borderRadius: '5px', display: 'flex'},
             caret: {borderStyle: 'solid', borderWidth: '10px 10px 0px 10px', borderBottomColor: 'transparent', borderLeftColor: 'transparent', borderTopColor: 'rgba(0,0,0,.8)', borderRightColor: 'transparent', width: '0px', height: '0px', display: 'block', position: 'absolute', top: tCarret + 'px', left: mCarret + 'px'},
             selectedText: s.toString()
           });
         }
         else {
           this.setState({
             subMenu: {display: 'none'},
             caret: {display: 'none'},
             selectedText: ''
           });
         }
       }

  render() {
    return <div>
      <div id={'_selectedText' + this.state.id}>{this.props.children}</div>
      <div id={'_beacon' + this.state.id} style={this.state.subMenu}>
      {this.addItems()}
      </div>
      <div style={this.state.caret}></div>
    </div>
  }
}
export default SelectedMenu
