import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import React from "react";

const PropertyTable = () => {

    return (
        <>
            <div className="card propertyTable">
                <DataTable  columnResizeMode="expand" paginator rowsPerPageOptions={[5, 10, 25, 50]} >
                    <Column field="date" header="Date"  sortable />
                    <Column field="property" header="Property" sortable />
                    <Column field="unit" header="Unit" sortable />
                    <Column field="expense" header="Expense" sortable />
                    <Column field="income" header="Income" sortable />
                    <Column field="paidto" header="Paid to" sortable />
                    <Column field="category" header="Category" sortable />
                    <Column field="memo" header="Memo" sortable  />
                </DataTable>
                <div  className="tableData mt-3">

                    <div className=" w-15rem border-round">
                        <div style={{color :'white'}} className="my-6  border-round bg-orange-500 font-bold p-3 flex align-items-center justify-content-center">($5,000)</div>
                    </div>

                    <div className=" w-15rem ml-1  border-round">
                        <div style={{color: 'white'}} className=" mx-0  border-round bg-orange-500 font-bold p-3 flex align-items-center justify-content-center">($10,000)</div>
                    </div>
                    <div className=" w-15rem ml-1  border-round">
                        <div style={{color: 'white'}} className=" mx-0  border-round bg-success font-bold p-3 flex align-items-center justify-content-center">$5,000 YTD Cash Flow</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyTable