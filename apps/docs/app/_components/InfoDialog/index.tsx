"use client";
import Dialog from "@repo/ui/dialog";
import { useState } from "react";

const InfoDialog = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Dialog
        open={visible}
        onClickClose={() => {
          setVisible(false);
        }}
      >
        Some stuff here
      </Dialog>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default InfoDialog;
