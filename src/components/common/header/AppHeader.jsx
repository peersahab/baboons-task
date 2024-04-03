import './styles.css';
import { Layout, Button } from 'antd';
import CreateButton from '../CreateButton.jsx';
const { Header } = Layout;
const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="logo">Logo</div>
      <CreateButton />
    </Header>
  );
};

export default AppHeader;
