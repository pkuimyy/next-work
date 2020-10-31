class Work {
    constructor(corporation_name?: string, industry_name?: string, architecture_name?: string, position_name?: string, achievement?: string) {
        this.corporation_name = corporation_name
        this.industry_name = industry_name
        this.architecture_name = architecture_name
        this.position_name = position_name
        this.achievement = achievement
    }
    corporation_name: string;
    industry_name: string;
    architecture_name: string;
    position_name: string;
    achievement: string;
    fill(corporation_name: string, industry_name: string, architecture_name: string, position_name: string) {
        this.corporation_name = corporation_name
        this.industry_name = industry_name
        this.architecture_name = architecture_name
        this.position_name = position_name
    }
}

export { Work }