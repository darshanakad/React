import React from "react";
import Log from "./Log";
import Table from './Table';
import Add from './Add';
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
 function Routing(){
     return(
         <div>
             <BrowserRouter>
             <Routes>
                 <Route exact path="/Log" element={<Log/>}/>
                 <Route exact path="/Table" element={<Table/>}/>
                 <Route exact path="/Add" element={<Route/>}/>
                
             </Routes>
             </BrowserRouter>
         </div>
     )
 }
 export default Routing