import React from "react";
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

const Table=({data,deleteData})=>{
    return data.map(info=>(
      <tr key={info.username}>
          <td>{info.username}</td>
          <td>{info.password}</td>
          <td className="delete-btn" onClick={()=>deleteData(info.username)}>
          <Icon icon={trash}/>
          </td>
      </tr>
    ))
}
export default Table