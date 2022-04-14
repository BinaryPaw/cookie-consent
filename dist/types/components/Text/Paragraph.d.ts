/// <reference types="react" />
export interface IParagraphProps {
    small?: boolean;
    children: string;
}
declare function Paragraph({ small, children }: IParagraphProps): JSX.Element;
declare namespace Paragraph {
    var defaultProps: {
        small: boolean;
    };
}
export default Paragraph;
