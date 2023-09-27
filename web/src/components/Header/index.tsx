import logo from '../../assets/images/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>Candidaturas</h1>
                    <h2>Acompanhe suas candidaturas</h2>
                </div>

                <img src={logo} alt="ConectaJobs"/>
            </Content>
        </Container>
    )
}
