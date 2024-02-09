import Button from "@repo/ui/button";
import DemoBox from "docs/components/DemoBox";

const ButtonBaseUsage = () => {
  return (
    <DemoBox>
      <Button
        onClick={() => {
          alert("Button has been clicked!");
        }}
      >
        Open
      </Button>
    </DemoBox>
  );
};

export default ButtonBaseUsage;
