import styled from 'styled-components';
// import {common} from '/src/theme/colors'

const WrapperLayout = styled.div`
	width: 100%;
`;

const CenteredContent = styled.section`
	display: flex;
   	flex-direction: column;
	max-width: 1280px;

   @media ( max-width: 1279px) {
      padding: 0 10px;
   }
`;

export default {
	WrapperLayout,
	CenteredContent,
};
