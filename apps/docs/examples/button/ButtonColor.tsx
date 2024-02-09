import Button from "@repo/ui/button";
import DemoBox from "docs/components/DemoBox";

const ButtonColor = () => {
  return (
    <DemoBox>
      <Button color="default">Default</Button>

      <Button color="primary">Primary</Button>

      <Button color="secondary">Secondary</Button>

      <Button color="danger">Danger</Button>

      <Button color="transparent">Transparent</Button>
    </DemoBox>
  );
};

export default ButtonColor;
