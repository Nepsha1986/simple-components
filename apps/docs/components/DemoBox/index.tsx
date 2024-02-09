import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}
const DemoBox = ({ children }: Props) => {
  return <div className={styles.demoBox}>{children}</div>;
};

export default DemoBox;
