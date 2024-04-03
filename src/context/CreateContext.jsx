import { useState, useContext, createContext } from 'react';

const CreateContext = createContext();

export const useCreateContext = () => useContext(CreateContext);

export const CreateProvider = ({ children }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [data, setData] = useState([]);

  const toggleForm = (isVisible) => {
    setIsFormVisible(isVisible);
  };

  const updateData = (newData) => {
    setData([ ...data, newData ]);
  };

  return (
    <CreateContext.Provider value={{ isFormVisible, toggleForm, data, updateData }}>
      {children}
    </CreateContext.Provider>
  );
};
