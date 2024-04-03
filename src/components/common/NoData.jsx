import { Empty } from 'antd';
import CreateButton from './CreateButton.jsx';
const NoData = () => {

  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span>
        There seems to be no data available
      </span>
      }
    >
      <CreateButton />
    </Empty>
  );
};
export default NoData;
