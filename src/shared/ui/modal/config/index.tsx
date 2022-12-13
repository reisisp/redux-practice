export interface ApplyModalProps {
  children: string | React.ReactNode;
  msgTitle: string;
  msgBody: string;
  confirm: () => void;
  isActive?: boolean;
}
