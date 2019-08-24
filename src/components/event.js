import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import firebase from '../services/firebase'
import { Grid, Container, Button, Card, Image, Header } from 'semantic-ui-react'

class Event extends React.Component {
	constructor(props){
    super(props);

    this.state = {
      eventos: [],
    }
    this.filtraArray = this.filtraArray.bind(this);
	}

  componentDidMount(){
    firebase.database().ref('Eventos').once("value").then(snapshot => {
    this.setState({eventos: snapshot.val()});
    });
  }

  filtraArray = () => {
    let array = Object.values(this.state.eventos)
		const {id} = this.props.match.params
    console.log(id)
      console.log(array);
    let arrayFiltrado = array.filter((evento)=>evento.id == id).map(evento => {

        return(
          <div>

              <Grid className="template-header" >
                <Grid.Row>
                  <Grid.Column width={3}>
                <Link to="/feed" >Voltar</Link>
                  </Grid.Column>
                  <Grid.Column width={13}>
                      <Header  as='h2'>{evento.nome}</Header>

              </Grid.Column>
                </Grid.Row>
              </Grid>




            <Image rounded centered
                src={evento.imagem}
                as='eventblablabal'
                size='medium'
                href='http://google.com'
                target='_blank'
            />
            <p>Dia: {evento.data}</p>

            <h3><strong>Sobre:</strong></h3>
            <p>
              {evento.descricao}
            </p>
            </div>

        );

    });
    console.log(arrayFiltrado);
    return arrayFiltrado;
  }


	render() {
      const pagina = this.filtraArray()
	  	return 	(
        <Container>
          {pagina}

        </Container>
		)
	}
}

export default Event;
