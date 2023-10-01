import ApplicationIcon from '../../assets/images/ApplicationIcon.svg';
import OnlineTestIcon from '../../assets/images/OnlineTestIcon.svg';
import InterviewIcon from '../../assets/images/InterviewIcon.svg';
import WaitingReturnIcon from '../../assets/images/WaitingReturnIcon.svg';

import { Container, Board, OrdersContainer } from "./styles";

export function Orders() {
    return (
        <Container>
            <Board>
                <header>
                    <img src={ApplicationIcon} alt="Applications Icon" />
                    <strong>Candidaturas</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <img src={OnlineTestIcon} alt="Online Test Icon" />
                    <strong>Teste Online</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <img src={InterviewIcon} alt="Interview Icon" />
                    <strong>Entrevista</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                </OrdersContainer>
            </Board>

            <Board>
                <header>
                    <img src={WaitingReturnIcon} alt="Waiting Return Icon" />
                    <strong>Aguardando Retorno</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                    <button type="button">
                        <strong>Cargo</strong>
                        <span>Empresa</span>
                    </button>
                </OrdersContainer>
            </Board>
        </Container>
    );
}
