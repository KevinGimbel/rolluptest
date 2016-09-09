const noop = () => {};

export class ButtonElement extends React.Component {
  constructor() {
    super();
  }

  getDefaultProps() {
    return {
      label: 'No label set',
      onClick: noop
    }
  }

  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.label}</button>
    )
  }
}


export class InputElement extends React.Component {
  constructor() {
    super();
  }

  getDefaultProps() {
    return {
      label: 'No label set',
      type: 'text',
      onChange: noop
    }
  }

  render() {
    return (
      <input type={this.props.type} placeholder={this.props.label} onChange={this.props.onChange} />
    )
  }
}

export class Card extends React.Component {
  constructor() {
    super();
  }

  getDefaultProps() {
    return {
      title: 'No title',
      body: 'No body text.'
    }
  }

  render() {
    let {title, body, img} = this.props;
    let cardImg = (img) ? <img src={img} className="card__media--image"/> : '';
    return(
      <div className="card">
        <header className="card__media">
          {cardImg}
          <h3 className="card__headline">{title}</h3>
        </header>
        <div className="card__body">
          <p>{body}</p>
        </div>
      </div>
    )
  }
}

export class CardWrapper extends React.Component {
  constructor() {
    super();
  }

  render() {
    let cards = this.props.source.map( (set) => {
      let name = set.name.first + ' ' + set.name.last;
      let about = set.about;
      let img = set.img;
      return <Card title={name} body={about} img={img} />;
    });

    return(
      <div>{cards}</div>
    )
  }
}
