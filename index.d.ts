declare module JsRender {
    interface Converters {
        (name: string, converterFn: (value: any) => any): any;
        (namedConverters: any, parentTemplate?: any): any;

        html(valueToEncode: string): string;
        attr(valueToEncode: string): string;
        url(valueToEncode: string): string;
    }

    interface Views {
        converters: Converters;

        tags(name: string, tagFn: (value: any) => any): any;
        tags(name: string, tagOptions: any): any;
        tags(namedTags: any): any;

        helpers(name: string, helper: any): any;
        helpers(namedHelpers: any, parentTemplate?: any): any;
    }

    interface Template {
        render(data?: any, helpersOrContext?: any): string;
        link(container: HTMLElement, data: any, helpersOrContext?: any): JQuery;
        link(containerSelector: string, data: any, helpersOrContext?: any): JQuery;
    }

    interface NamedTemplate {
        (data?: any): string;
    }

    interface Render {
        (data?: any, helpersOrContext?: any): string;
    }

    interface RenderStatic {
        [index: string]: NamedTemplate;
    }

    interface View {
        (context: any): any;

        type: string;
        data: any;
        parent: View;
        index: number;
        getIndex(): number;
        get(type: string);
        get(deep: boolean, type: string): View;
        content: Template;
    }

    export class Tag {
        onAfterLink(tagCtx, linkCtx, eventArgs?): void;
        base: any;
    }
}

interface JQuery {
    render: JsRender.Render;
}

interface JQueryStatic {
    render: JsRender.RenderStatic;
    views: JsRender.Views;
    view: JsRender.View;
    templates(markupOrSelector: string): JsRender.Template;
    templates(name: string, markupOrSelector: string): JsRender.Template;
    templates(namedTemplates: any): any;
}
