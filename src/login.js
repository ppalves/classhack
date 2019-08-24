import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import "./login.css"
import logo from '../UNIEVENT.png';

class Login extends React.Component {
  render () {
    return (
			<div className='login'>
				<Grid container columns={1} className='painel-login'>
					<Grid.Column>
						<Grid.Row centered className='linha-login'>
							<Image src={logo} centered size='small' />
						</Grid.Row>
						<Grid.Row centered className="coluna-login">
							<Form size="massive">
								 <Form.Field required>
								 	 <input type='email' placeholder='E-mail' className='input-login' />
								 </Form.Field>
								 <Form.Field required width='16'>
									 <input type='password' placeholder='Senha' className='input-login' />
									 <p className='recuperar-senha-login'>Esqueci minha senha</p>
								 </Form.Field>
								 <Button circular size='big' className='botao-login' type='submit'>Entrar</Button>
								 <p>Não tem conta ainda? <Link to="/cadastro">Cadastre-se</Link> </p>
							</Form>
						</Grid.Row>
					</Grid.Column>
				</Grid>
	   	</div>
    );
  }
}

export default Login;
