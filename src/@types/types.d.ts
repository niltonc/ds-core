//select
interface Option {
  value: string;
  label: string;
}
type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onSelect?: (value: any) => void;
};
