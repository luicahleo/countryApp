import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from "@angular/core";

@Component({
    selector: "shared-search-box",
    templateUrl: "./search-box.component.html",
    styles: [],
})
export class SearchBoxComponent {
    @ViewChild("txtInput")
    public tagInput!: ElementRef<HTMLInputElement>;

    @Input()
    placeholder: string = "";

    @Output()
    onValue = new EventEmitter<string>();

    emitValue(value: string) {
        this.onValue.emit(value);
    }
}
