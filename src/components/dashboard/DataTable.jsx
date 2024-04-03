import { Button, Table } from 'antd';
import NoData from '../common/NoData.jsx';
const columns = [
  {
    title: 'Wallet Address',
    dataIndex: 'walletAddress',
    key: 'wallet-address',
  },
  {
    title: 'Token Name',
    dataIndex: 'tokenName',
    key: 'token-name',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Button type="primary" style={{width: '100%'}} size="large">View</Button>
    ),
  },
];
const DataTable = ({ data }) => {
  return (
    data.length > 0 ? (
      <Table style={{ width: '100%' }} columns={columns} dataSource={data} size="large" bordered />
    ) : (
      <NoData />
    )
  )
};
export default DataTable;
