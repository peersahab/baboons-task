import { Button } from 'antd';
import { useCreateContext } from '../../context/CreateContext.jsx';
const CreateButton = () => {
  const { toggleForm } = useCreateContext();

  return (
    <Button className="create-button" type="primary" onClick={() => toggleForm(true)}>
      Create
    </Button>
  );
};

export default CreateButton;
