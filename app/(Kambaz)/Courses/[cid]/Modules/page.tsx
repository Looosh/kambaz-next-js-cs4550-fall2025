"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  addModule,
  deleteModule,
  editModule,
  updateModule,
} from "./reducer";

interface Module {
  _id: string;
  name: string;
  course: string;
  editing?: boolean;
}

interface ModulesState {
  modules: Module[];
}

interface RootState {
  modulesReducer: ModulesState;
}

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");

  if (!cid || Array.isArray(cid)) {
    return <div>Error: Course ID is missing or invalid</div>;
  }
  const courseId: string = cid;

  return (
    <div className="wd-modules p-3">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (!moduleName.trim()) return; // prevent empty names
          dispatch(addModule({ name: moduleName, course: courseId }));
          setModuleName("");
        }}
      />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((m: Module) => m.course === courseId)
          .map((module: Module) => (
            <ListGroup.Item
              key={module._id}
              className="d-flex justify-content-between align-items-center"
            >
              {!module.editing && <span>{module.name}</span>}

              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                />
              )}

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(id: string) => dispatch(deleteModule(id))}
                editModule={(id: string) => dispatch(editModule(id))}
              />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}
