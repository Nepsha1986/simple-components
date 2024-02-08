"use client";

import Dialog from "@repo/ui/dialog";
import Button from "@repo/ui/button";
import { useState } from "react";

const DialogExample = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
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
    </div>
  );
};

export default DialogExample;
