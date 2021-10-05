import React from 'react'
import TableCheckService from '../ApiService/TableCheckAPIService'

export default class TableNr extends React.Component {


    state = {
        tablenr: 0
    }
    componentDidMount() {
        TableCheckService.GetTableNr().then((data) => {
           localStorage.setItem('TableNr', data)
           console.log(this.state.data)
        })
        .catch(function (ex) {
            console.log('Response parsing failed. Error: ', ex);
        });;
    }

    render() {
    return (
        <div>
            {localStorage.getItem('TableNr')}
        </div>
    )
  
    }
}