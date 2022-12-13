export interface ApplyModalProps {
  children: string | React.ReactNode;
  msg: string;
  confirm: () => void;
  isActive?: boolean;
}
