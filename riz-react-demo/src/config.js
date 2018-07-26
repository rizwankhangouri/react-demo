export const _local = {  
    apiUrl:'',
    apiKey:"",    
    db: {
        username: "",
        password: "",
        host: 'localhost'
    }
}

export const _stage = {  
    apiUrl:'',
    apiKey:"",  
    db: {
        username: "",
        password: "",
        host: 'localhost'
    }
}

export const _production = {    
    apiUrl:'',   
    db: {
        username: "",
        password: "",
        host: 'localhost'
    }
}

const config = function getConfig(mode) {
    switch (mode) {
        case 'local':
            return _local; 
        case 'stage':
            return _stage; 
        case 'production':
            return _production; 
        default:
            return _local; 
    }
}

export default config(process.env.REACT_APP_MODE);