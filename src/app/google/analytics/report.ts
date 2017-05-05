export class Report {
    constructor(
        public name: string,
        public query: any,
        public meta: any,
        public data: any,
        public totals: string,
        public taken_at: string,
    ) { }
}

