export class State {
    stateName: string;
    stateCode: string;
    totalCases: number;
    todayCases: number;
    totalDeaths: number;
    todayDeaths: number;
    totalRecovered: number;
    todayRecovered: number;
    active: number;
    constructor( args){
        this.active = args.active;
        this.stateName = args.state;
        this.stateCode = args.stateCode;
        this.todayCases = args.deltaconfirmed;
        this.todayDeaths = args.deltadeaths;
        this.todayRecovered = args.deltarecovered;
        this.totalCases = args.confirmed;
        this.totalDeaths = args.deaths;
        this.totalRecovered = args.recovered;
    }
}
