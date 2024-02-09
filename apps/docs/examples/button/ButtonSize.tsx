import Button from "@repo/ui/button";
import DemoBox from "docs/components/DemoBox";

const ButtonSize = () => {
  return (
    <DemoBox>
      <Button size="sm">Small</Button>

      <Button size="md">Medium</Button>

      <Button size="lg">Large</Button>
    </DemoBox>
  );
};

export default ButtonSize;
