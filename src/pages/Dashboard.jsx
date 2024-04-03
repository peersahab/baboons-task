import CreateForm from '../components/dashboard/CreateForm.jsx';
import { Card } from 'antd';
import { useCreateContext } from '../context/CreateContext.jsx';
import DataTable from '../components/dashboard/DataTable.jsx';

function Dashboard() {
  const { data, isFormVisible } = useCreateContext();
  return (
      isFormVisible ? (
        <div className={`full-height container`}>
          <Card style={{ width: '35vw' }}>
            <CreateForm />
          </Card>
        </div>
      ) : (
        <div className={`full-height width-90 container`}>
          <DataTable data={data} />
        </div>
      )
  );
}

export default Dashboard;
