import * as Styles from './styled';

export type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};
