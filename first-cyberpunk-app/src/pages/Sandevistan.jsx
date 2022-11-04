import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, 
  ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids'

import { sandevistanData, contextMenuItems, sandevistanGrid } from '../data/dummy'
import { Header } from '../components'


const Sandevistan = () => {
  
  
  return (
    <div className="m-2 md:10 p-2 md:p-10
    bg-white rounded-3xl">
      <Header category = "Pagina" title = "Sandevistan" subt="Lista de Sistemas Operativos de Sandevistan" />
      <GridComponent
            id = "gridComp"
            dataSource={sandevistanData}
            allowPaging
          >
        <ColumnsDirective>
          {sandevistanGrid.map((item, index)=> (
            <ColumnDirective key= {index}
            {...item} />
          ))}

        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}  

export default Sandevistan