/// <reference types="react" />
export interface ISwitchProps {
    checked: boolean;
    disabled?: boolean;
    onClick?: Function;
}
declare function Switch({ checked, disabled, onClick }: ISwitchProps): JSX.Element;
declare namespace Switch {
    var defaultProps: Partial<ISwitchProps>;
}
export default Switch;
