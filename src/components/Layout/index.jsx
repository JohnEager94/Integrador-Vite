import { element } from 'prop-types';
import Styles from './styles';
import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';

const Layout = ({ children }) => {
   return (
      <Styles.WrapperLayout>
         <Header />
         <Hero />
         <Footer />
         <Styles.CenteredContent>
            {children}
         </Styles.CenteredContent>
      </Styles.WrapperLayout>
   )
}

Layout.propTypes = {
   children: element,
}
// Layout.defaultProps = {
//    children: null,
// }

export default Layout

