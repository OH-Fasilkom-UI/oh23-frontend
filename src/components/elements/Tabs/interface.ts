export interface TabsProps {
  buttonsText: string[];
  defaultIndex: number;
  className?: string;
  onClicks: (() => void)[];
}
