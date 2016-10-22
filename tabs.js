import React from 'react';

export default class Tabs extends React.Component {

  constructor(props) {
    super(props);
    let starterTab = props.tab[0];
    this.state = {title: starterTab.title,content: starterTab.content};
  }

  tabSelect(tab) {
    this.setState({ title: tab.title, content: tab.content }, this.updateTabs);
  }

  updateTabs(){
    document.querySelectorAll("li").forEach( li => {
      if (li.innerHTML === this.state.title){
        li.className = "selected";
      }
      else {
        li.classList.remove("selected");
      }
    });
  }

  render() {
    return (
      <div>
        <ul className = "tabs">
        {
          this.props.tab.map( t => (
            <li key={t.title} onClick={this.tabSelect.bind(this, t)}>{t.title}</li>
          ))
        }
        </ul>
        <article className = "article">
        {
          this.state.content
        }
        </article>
      </div>
    );
  }

}
