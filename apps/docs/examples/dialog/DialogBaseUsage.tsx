"use client";
import { useState } from "react";
import Dialog from "@repo/ui/dialog";
import Button from "@repo/ui/button";
import DemoBox from "docs/components/DemoBox";

const DialogBaseUsage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <DemoBox>
      <Dialog
        open={opened}
        onClickClose={() => {
          setOpened(false);
        }}
      >
        Some stuff here
      </Dialog>

      <Button
        color="primary"
        onClick={() => {
          setOpened(true);
        }}
      >
        Open
      </Button>
    </DemoBox>
  );
};

export default DialogBaseUsage;
