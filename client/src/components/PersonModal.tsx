import { observer } from "mobx-react";
import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export interface IPersonModalProps {
  show: boolean;
}

export const PersonModal: React.FC<{
  show: boolean;
  toggle: (show: boolean) => void;
}> = observer(({ show, toggle }) => {
  return (
    <Modal
      basic
      onClose={() => toggle(false)}
      onOpen={() => toggle(true)}
      open={show}
      size="small"
    >
      <Header icon>
        <Icon name="archive" />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={() => toggle(false)}>
          <Icon name="checkmark" /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
});
