import styled from "styled-components";

export const Overlay = styled.div`
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #fff;
    width: 480px;
    border-radius: 8px;
    padding: 32px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            font-size: 24px;
        }

        button {
            display: flex;
            border: 0;
            background: transparent;
        }
    }

    .status-container {
        margin-top: 32px;

        small {
            font-size: 14px;
            opacity: 0.8;
        }

        div {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        img {
            width: 32px;
        }
    }
`;

export const ApplicationDetails = styled.div`
    margin-top: 32px;

    > strong {
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;
    }

    .application-details {
        margin-top: 16px;

        .info {
            display: flex;
            margin-top: 16px;

            strong {
                display: block;
            }

            img {
                margin-right: 8px;
            }
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .primary {
        background: #68DDBD;
        border-radius: 48px;
        border: 0;
        color: #fff;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .secondary {
        padding: 14px 24px;
        color: #D73035;
        font-weight: bold;
        border: 0;
        background: transparent;
        margin-top: 12px;
    }
`;
