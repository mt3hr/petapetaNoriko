import HTMLTagDataBase from "./HTMLTagDataBase";

export default class EmailTagData extends HTMLTagDataBase {
    name = ""
    value = ""
    size = "1"
    maxlength = ""
    autocomplete = "default"
    multiple = false
    pattern = ""
    placeholder = ""
    readonly = false
    required = false
    constructor() {
        super()
        this.tagname = "email"
    }
    override generate_html(print_id_for_css: boolean): string {
        // TODO 
        return ""
    }
}