import HTMLTagDataBase from "./HTMLTagDataBase";

export default class MonthTagData extends HTMLTagDataBase {
    name = ""
    value = ""
    autocomplete = ""
    list = ""
    max = ""
    min = ""
    readonly = false
    required = false
    step = ""
    constructor() {
        super()
        this.tagname = "month"
    }
    override generate_html(print_id_for_css: boolean): string {
        // TODO 
        return ""
    }
}