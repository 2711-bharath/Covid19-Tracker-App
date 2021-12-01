export class Country {
    countryName: string;
    totalCases: number;
    todayCases: number;
    totalDeaths: number;
    todayDeaths: number;
    totalRecovered: number;
    critical: number;
    active: number;
    casesPerMillion: number;
    deathsPerMillion: number;
    totalTests: number;
    testsPerOneMillion: number;
    constructor( args){
        this.active = args.active;
        this.casesPerMillion = args.casesPerOneMillion;
        this.countryName = args.country;
        this.deathsPerMillion = args.deathsPerOneMillion;
        this.testsPerOneMillion = args.testsPerOneMillion;
        this.todayCases = args.todayCases;
        this.todayDeaths = args.todayDeaths;
        this.totalCases = args.cases;
        this.totalDeaths = args.deaths;
        this.totalRecovered = args.recovered;
        this.totalTests = args.totalTests;
        this.critical = args.critical;
    }
}
