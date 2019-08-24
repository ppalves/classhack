import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import firebase from '../services/firebase'
import { Container, Button, Card, Image, Header } from 'semantic-ui-react'
import './feed.css'
import {Link} from 'react-router-dom'


class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventos: [],
    }
    this.filtraArray = this.filtraArray.bind(this);
    this.ordenaArray = this.ordenaArray.bind(this);
  }

  componentDidMount(){
    firebase.database().ref('Eventos').once("value").then(snapshot => {
    this.setState({eventos: snapshot.val()});
    });
  }

  ordenaArray = (array) => {
    array.sort((a,b)=>{
      let d1 = moment(a.data)
      let d2 = moment(b.data)
      if(d1 < d2){
        return -1;
      }
      else if (d2 < d1) {
        return 1;
      }
      else {
        return 0;
      }
    })
  }

  filtraArray = () => {
    let array = Object.values(this.state.eventos)
    this.ordenaArray(array)
    let arrayFiltrado = array.map(evento => {
      let link = "/event/" + evento.id
      return(
        <Link to={link}>
          <Card className="card">
  					<Image src={evento.imagem} wrapped ui={false} />
  					<Card.Content>
  						<Card.Header>{evento.nome}</Card.Header>
  						<Card.Meta>
  							<span className='date'>{evento.data}</span>
  						</Card.Meta>

  					</Card.Content>
  				</Card>
        </Link>
      );
    });
    return arrayFiltrado;
  }

  render () {
    let eventos = this.filtraArray()
    return(
      <Container>
			<Header className="template-header" as='h1'>Eventos</Header>
      <Card.Group centered>
        {eventos}
      </Card.Group>
      </Container>
    )

  }
}

export default Feed;
