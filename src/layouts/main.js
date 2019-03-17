import Meta from '../components/meta';
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';
import PageContent from '../components/page-content/page-content.component';

export default ({ children }) => (
  <React.Fragment>
    <Meta />
    <Header />
    <PageContent>{children}</PageContent>
    <Footer />
  </React.Fragment>
);
