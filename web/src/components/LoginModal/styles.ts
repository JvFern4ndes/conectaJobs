import styled from 'styled-components';

export const Overlay = styled.div`
    left: 0;
    top: 0;
    background: #68DDBD;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #fafafa;
    width: 480px;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 120px;
        margin-bottom: 32px;
    }

    input {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #ccc;
        padding: 16px;

        input + & {
            margin-bottom: 16px;
        }
    }

    button {
        background: ${({ disabled }) => disabled ? '#999' : '#68DDBD'};
        border-radius: 32px;
        width: 100%;
        color: #fafafa;
        font-weight: #900;
        padding: 14px 24px;
        margin-top: 32px;
        align-items: center;
        justify-content: center;
        border: none;

        &.disabled {
            background: #999;
            cursor: not-allowed;
        }
    }
`;
