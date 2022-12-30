import { serializable } from "@/serializable/serializable";
import HTMLTagDataBase from "./HTMLTagDataBase";

@serializable
export default class RangeTagData extends HTMLTagDataBase {
    name = ""
    value = ""
    autocomplete = ""
    list = ""
    max = ""
    min = ""
    step = ""
    constructor() {
        super()
        this.tagname = "range"
    }
    override generate_html(print_id_for_css: boolean): string {
        let html = ""
        html += "<input type=\"range\""
        if (print_id_for_css) html += " id=\"" + this.tagid + "\""
        if (this.tagclass != "") html += " class=\"" + this.tagclass + "\""
        if (this.name != "") html += " name=\"" + this.name + "\""
        if (this.value != "") html += " value=\"" + this.value + "\""
        if (this.autocomplete != "") html += " autocomplete=\"" + this.autocomplete + "\""
        if (this.list != "") html += " list=\"" + this.list + "\""
        if (this.max != "") html += " max=\"" + this.max + "\""
        if (this.min != "") html += " min=\"" + this.min + "\""
        if (this.step != "") html += " step=\"" + this.step + "\""
        html += ">"
        return html
    }
}