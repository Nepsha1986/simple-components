"use client";

import Dialog from "@repo/ui/dialog";
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

      <button
        onClick={() => {
          setOpened(true);
        }}
      >
        Open
      </button>
    </div>
  );
};

export default DialogExample;
