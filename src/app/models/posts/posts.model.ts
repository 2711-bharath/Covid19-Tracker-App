export class Posts {
    id: string | null;
    availabiltyDate : Date;
    quota1: number;
    quota2: number;
    quota3: number;
    quota4: number;
    quota5: number;
    quota6: number;
    quota7: number;
    quota8: number;
    quota9: number;
    quota10: number;
    quota11: number;
    totalQuota: number | null;    

    constructor( args ){
        this.availabiltyDate = new Date( args.availabilityDate );
        this.quota1 = args.quota1;
        this.quota2 = args.quota2;
        this.quota3 = args.quota3;
        this.quota4 = args.quota4;
        this.quota5 = args.quota5;
        this.quota6 = args.quota6;
        this.quota7 = args.quota7;
        this.quota8 = args.quota8;
        this.quota9 = args.quota9;
        this.quota10 = args.quota10;
        this.quota11 = args.quota11;
        this.totalQuota = args.quota1 + args.quota2 + args.quota3 + args.quota4 + args.quota5 + args.quota6 + args.quota7 + args.quota8 + args.quota9 + args.quota10 + args.quota11;
    }
}
