import {TabPanel, TabView} from "primereact/tabview";
import ExpenseForm from "./ExpenseForm.jsx";
import IncomeForm from "./IncomeForm.jsx";
import './Style.scss'
// eslint-disable-next-line react/prop-types
const FormTab = () => {

    return (
        <div className="card" style={{fontSize: '18px'}}>
            <TabView style={{backgroundColor: '#95a4bd'}}>
                <TabPanel header="Expense" leftIcon="pi pi-money-bill mr-2" >
                    <ExpenseForm/>
                </TabPanel>

                <TabPanel header="Income" leftIcon="pi pi-wallet mr-2">
                    <IncomeForm/>
                </TabPanel>
            </TabView>
        </div>
    )
}

export default FormTab