import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/navbar'
import TableList from './components/TableList'
import AppRoutes from './router/router'
import { ModalProvider } from './context/Modalcontext'


function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [modalMode, setModalMode] = useState('add');

  // const handleOpen = (mode) => {
  //   setIsOpen(true);
  //   setModalMode(mode);
  // }

  // const handleSubmit = () => {
  //   if (modalMode === 'add') {
  //     console.log("modal mode Add")
  //   } else {
  //     console.log("modal mode Edit")
  //   }
  // }

  return (
    <div>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
      {/* <Navbar onOpen={() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit} onClose={() => setIsOpen(false)} mode={modalMode} /> */}
    </div>
  )
}

export default App
