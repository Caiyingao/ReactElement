import Button from './index.tsx';
import { IProps } from './interface';
export default (props: IProps) => {
  const { onClick, disabled = false } = props;
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
      />
    </>
  );
};
