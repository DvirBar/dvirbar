export type SelectItem = (id: string, index: number) => void;

export interface SelectedItem {
  elementId: string;
  index: number;
}
