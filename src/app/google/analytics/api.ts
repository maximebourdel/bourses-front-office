export class Api {
    constructor(
        public name: string,
        public kind: string,
        public query: any,
        public data: any,
        public itemsPerPage: number,
        public totalResults: number,
        public selfLink: string,
        public profileInfo: any,
        public containsSampledData: boolean,
        public columnHeaders: any,
        public totalsForAllResults: any,
        public rows: any,
    ) { }
}
