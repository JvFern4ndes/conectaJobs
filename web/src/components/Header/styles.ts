import styled from 'styled-components';

export const Container = styled.header`
    background: #68DDBD;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-weight: 400;
            font-size: 24px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }

    img {
        width: 200px;
    }
`;
