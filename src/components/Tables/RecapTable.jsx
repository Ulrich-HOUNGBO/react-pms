import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import './Style.scss'

export const RecapTable = () => {
    return (
        <div className="card">
            <DataTable columnResizeMode="expand" resizableColumns tableStyle={{ minWidth: '8rem'}}>
                <Column field="date" header="Date"></Column>
                <Column field="property" header="Property"></Column>
                <Column field="unit" header="Unit"></Column>
                <Column field="expense" header="Expense"></Column>
                <Column field="income" header="Income"></Column>
                <Column field="paid-to" header="Paid to"></Column>
                <Column field="category" header="Category"></Column>
                <Column header="Action"></Column>
            </DataTable>
        </div>
    )
}
