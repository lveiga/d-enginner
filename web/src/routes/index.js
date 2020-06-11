import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom"

import lancamentos from '../pages/lancamentos';
import produtos from '../pages/produtos';
import obras from '../pages/obras';


export default function Routes() {
    return (
        <Switch>
            <Route path="/lancamentos" component={lancamentos}>           
            </Route>
            <Route path="/produtos" component={produtos}>           
            </Route>
            <Route path="/obras" component={obras}>           
            </Route>
     </Switch>
    );
  }