import React, { FC, useState } from "react";
import { Button } from "./style";

import { Modal } from "./Modal";

export const Rules: FC = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {isModal && <Modal setIsModal={setIsModal} />}
      <Button onClick={() => setIsModal(true)}>rules</Button>
    </>
  );
};
