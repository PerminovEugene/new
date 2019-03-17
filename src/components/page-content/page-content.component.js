import LeftPanelComponent from '../left-panel.styl/left-panel.component';

export default ({ children }) => (
  <React.Fragment>
    <LeftPanelComponent />
    {children}
  </React.Fragment>
);
