export interface Option {
  value: string;
  label: string;
}

export type CustomSelectProps = {
  options: Option[];
  onSelect: (value: string) => void;
};
