export interface Option {
  value: string;
  label: string;
}

export type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string[]) => void;
};
