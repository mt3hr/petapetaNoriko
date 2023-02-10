import { serializable } from "@/serializable/serializable";
import HTMLTagDataBase, { GenerateHTMLOptions } from "./HTMLTagDataBase";
import { LabelType } from "./LabelType";

@serializable
export default class TelTagData extends HTMLTagDataBase {
    name = ""
    value = ""
    size = ""
    maxlength = ""
    autocomplete = ""
    pattern = ""
    placeholder = ""
    readonly = false
    required = false
    list = ""
    label_type: LabelType = LabelType.None
    label = ""
    constructor() {
        super()
        this.tagname = "tel"
        this.focus_property_name = "placeholder"
    }
    override generate_html(options: GenerateHTMLOptions, indent: string): string {
        let html = ""
        html += indent
        html += "<input type=\"tel\""
        if (options.export_id) html += " id=\"" + this.tagid + "\""
        if (this.tagclass != "") html += " class=\"" + this.tagclass + "\""
        if (this.name != "") html += " name=\"" + this.name + "\""
        if (this.value != "") html += " value=\"" + this.value + "\""
        if (this.size != "") html += " size=\"" + this.size + "\""
        if (this.maxlength != "") html += " maxlength=\"" + this.maxlength + "\""
        if (this.autocomplete != "") html += " autocomplete=\"" + this.autocomplete + "\""
        if (this.pattern != "") html += " pattern=\"" + this.pattern + "\""
        if (this.placeholder != "") html += " placeholder=\"" + this.placeholder + "\""
        if (this.readonly) html += " readonly"
        if (this.required) html += " required"
        if (this.list != "") html += " =\"" + this.list + "\""
        html += ">"
        return html
    }
    override to_string(): string {
        return this.name
    }
    override clone(): TelTagData {
        const c = new TelTagData()
        c.child_tagdatas = new Array<HTMLTagDataBase>()
        this.child_tagdatas.forEach((child_tagdata) => { c.child_tagdatas.push(child_tagdata.clone()) })
        c.has_child_tag = this.has_child_tag
        c.tagname = this.tagname
        c.tagid = this.tagid
        c.tagclass = this.tagclass
        c.position_x = this.position_x
        c.position_y = this.position_y
        c.scale = this.scale
        c.position_style = this.position_style
        c.selected_this_tag = this.selected_this_tag
        c.focus_property_name = this.focus_property_name
        c.name = this.name
        c.value = this.value
        c.size = this.size
        c.maxlength = this.maxlength
        c.autocomplete = this.autocomplete
        c.pattern = this.pattern
        c.placeholder = this.placeholder
        c.readonly = this.readonly
        c.required = this.required
        c.list = this.list
        c.label = this.label
        c.label_type = this.label_type
        return c
    }
}