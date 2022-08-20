
export enum GenderType {
    male,
    female
}

export type TitleBarProps = {
    title: String;
}

export type TitleBarSlider = {
    gender: GenderType;
    setGender: (gender: GenderType) => void;
}