import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import AppHeader from './components/common/header/AppHeader.jsx';
import { Layout, message } from 'antd';
import { CreateProvider } from './context/CreateContext.jsx';

function Root() {

  const [messageApi, contextHolder] = message.useMessage();

  const [user, setUser] = useState("");

  useEffect(() => {
    if (user) {
      messageApi.open({
        type: 'success',
        content: `Welcome ${user}`,
      });
    }
  }, [user]);

  return (
    <Router>
      {contextHolder}
      <CreateProvider>
        <Layout className="container full-height">
          {user && (
            <AppHeader />
          )}
          <AppRoutes user={user} setUser={setUser} />
        </Layout>
      </CreateProvider>
    </Router>
  )
}
export default Root
