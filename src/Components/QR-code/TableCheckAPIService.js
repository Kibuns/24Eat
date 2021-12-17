const TABLECHECK_REST_API = 'https://app-qrservice-211005095739.azurewebsites.net/api/';
const queryParams = new URLSearchParams(window.location.search);


class TableCheckAPIService {   

    CheckTable(){
        return fetch(TABLECHECK_REST_API + "check/" + queryParams.get("tablekey"),{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

    GetTableNr(){
        return fetch(TABLECHECK_REST_API + "gettable/" + queryParams.get("tablekey"),{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

}

export default new TableCheckAPIService();