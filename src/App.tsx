import "./styles.css";
import { useReducer } from "react";
import CreateFieldModal from "./components/CreateFieldModal";
import { FieldType } from "./types";
import { predefinedFields } from "./constants";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, {
    currentInteraction: null,
    fields: [...predefinedFields],
  });

  return (
    <div className="App">
      <h3>Fields</h3>
      <ul style={{ textAlign: "left" }}>
        {state.fields.map((field) => (
          <li key={field.name}>
            {field.name}: {field.primitive}
          </li>
        ))}
      </ul>
      <div className="toolbar">
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "setCurrentInteraction", payload: "createField" })
          }
        >
          Create Field
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "setCurrentInteraction",
              payload: "createService",
            })
          }
        >
          Create Service
        </button>
      </div>
      {state.currentInteraction === "createField" && (
        <CreateFieldModal
          isOpen={true}
          onSubmit={(field) => {
            dispatch({ type: "storeField", payload: field });
          }}
          onClose={() => {
            dispatch({ type: "setCurrentInteraction", payload: null });
          }}
        />
      )}
      {state.currentInteraction === "createService" && (
        <CreateFieldModal
          isOpen={true}
          onSubmit={(field) => {
            dispatch({ type: "storeField", payload: field });
          }}
          onClose={() => {
            dispatch({ type: "setCurrentInteraction", payload: null });
          }}
        />
      )}
    </div>
  );
}

type InteractionType = "createField" | "createService" | null;

interface AppState {
  currentInteraction: InteractionType;
  fields: Array<FieldType>;
}

type SetInteractionAction = {
  type: "setCurrentInteraction";
  payload: InteractionType;
};

type StoreFieldAction = {
  type: "storeField";
  payload: FieldType;
};

type Action = SetInteractionAction | StoreFieldAction;

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "setCurrentInteraction": {
      return { ...state, currentInteraction: action.payload };
    }
    case "storeField": {
      return { ...state, fields: [...state.fields, action.payload] };
    }
    default:
      throw new Error("Unhandled action type");
  }
};
