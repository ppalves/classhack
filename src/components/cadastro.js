import React from 'react'
import "./cadastro.css"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import back from '../back-arrow.png';
import logo from '../UNIEVENT.png';

class Cadastro extends React.Component {
  render () {
    return (
			<div className='cadastro'>
				<Link to="/"><Image src={back} /></Link>
				<Grid container columns={1} className='painel-cadastro'>
					<Grid.Column>
						<Grid.Row centered className='linha-cadastro'>
							<Image src={logo} centered size='small' />
						</Grid.Row>
						<Grid.Row centered className="coluna-cadastro">
							<Form size="massive">
								 <Form.Field required>
									 <input type='nome' placeholder='Nome' className='input-cadastro' />
								 </Form.Field>
								 <Form.Field required>
									 <input type='email' placeholder='E-mail' className='input-cadastro' />
								 </Form.Field>
								 <Form.Field required width='16'>
									 <input type='password' placeholder='Senha' className='input-cadastro' />
								 </Form.Field>
								 <Form.Field required width='16'>
									 <input type='password' placeholder='Confirmar senha' className='input-cadastro' />
								 </Form.Field>
								 <Button circular size='big' className='botao-cadastro' type='submit'>Cadastrar</Button>
							</Form>
						</Grid.Row>
					</Grid.Column>
				</Grid>
	   	</div>
    );
  }
}

export default Cadastro;
