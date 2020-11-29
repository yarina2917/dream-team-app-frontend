export interface IContainer {
    className: string,
    as: asType,
    children: any,
    justify: justifyType,
    align: alignType,
    direction: directionType,
    wrap: wrapType,
    marginBottom: number,
    fullWidth: boolean,
    handleClick: () => any,
    rootRef: any
}

type asType = 'li' | 'ul' | 'div' | 'section' | 'header' | 'footer' | 'nav' | 'article';
type justifyType = 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
type alignType = 'flex-start' | 'flex-end' | 'center';
type directionType =  'column' | 'column-reverse' | 'row' | 'row-reverse';
type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit';
