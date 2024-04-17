import { v4 as uuid } from "uuid";
import Modal, { ModalProps } from "../Modal";
import Input from "../Input";
import Select from "../Select";
import ExpressionEditor from "../ExpressionEditor";
import type { FieldType } from "../../types";
import { useState } from "react";

type Props = ModalProps & {
  onSubmit: (field: FieldType) => void;
};

const CreateFieldModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [changes, setChanges] = useState<FieldType>({
    id: uuid(),
    name: "",
    validation: "",
    primitive: "string",
  });

  const onChange = (key: keyof FieldType) => (value: any) => {
    console.log("Change on field", key, value);
    setChanges((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <h1>Create Field</h1>
        <Input
          label="Name"
          type="text"
          value={changes.name}
          onChange={onChange("name")}
        />
        <Select
          value={changes.primitive}
          label="Primitive"
          onChange={onChange("primitive")}
          options={[
            { value: "string", label: "string" },
            { value: "number", label: "number" },
            { value: "boolean", label: "boolean" },
            { value: "date", label: "date" },
          ]}
        />
        <ExpressionEditor
          value={changes.validation}
          onChange={onChange("validation")}
        />
        <button onClick={() => onSubmit(changes)}>Submit</button>
      </div>
    </Modal>
  );
};

export default CreateFieldModal;
