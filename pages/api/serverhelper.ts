

export default class ServerHelper {
    public persons;
    
    public handlePersonsList = async (req, res) => {
        console.log("req", req);
        console.log("res", res);
        this.persons = req.params.json();
       return req.params.json();
    };


}