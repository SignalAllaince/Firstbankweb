export interface DrawerProps {
  isOpen: boolean;
  setDrawer: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  title: string;
}
