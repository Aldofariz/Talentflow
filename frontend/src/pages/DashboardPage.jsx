import Navbar from '../components/navbar'
import ModalForm from '../components/ModalForm'
import TableList from '../components/TableList'

const DashboardPage = () => {
    return (
    <section>
        <Navbar/>
        <TableList />
        <ModalForm /> 
    </section>
    )
}

export default DashboardPage