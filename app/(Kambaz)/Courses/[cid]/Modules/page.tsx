/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import * as client from "../../client";
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
  setModules,
} from "./reducer";

interface Module {
  _id: string;
  name: string;
  course: string;
  description: string;
  editing?: boolean;
}

interface ModulesState {
  modules: Module[];
}

interface RootState {
  modulesReducer: ModulesState;
}

export default function Modules() {
  const dispatch = useDispatch();
  const params = useParams();
  const cidParam = params.cid;

  const courseId = Array.isArray(cidParam) ? cidParam[0] : cidParam;

  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    if (!courseId) return;
    const data = await client.findModulesForCourse(courseId);
    dispatch(setModules(data));
  };

  useEffect(() => {
    fetchModules();
  }, [courseId]);

  const handleAddModule = async () => {
    if (!moduleName.trim() || !courseId) return;

    const newModulePayload = { name: moduleName, course: courseId };
    const created = await client.createModuleForCourse(courseId, newModulePayload);

    dispatch(setModules([...modules, created]));
    setModuleName("");
  };

  

  const handleUpdateModule = (module: Module, updates: Partial<Module>) => {
    dispatch(updateModule({ ...module, ...updates }));
  };

//    const onRemoveModule = async (moduleId: string) => {
//    await client.deleteModule(courseId, moduleId);
//    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
//  };


  if (!courseId) {
    return <div>Error: Missing or invalid course ID</div>;
  }

  return (
    <div className="wd-modules p-3">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: Module) => (
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
                  handleUpdateModule(module, { name: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdateModule(module, { editing: false });
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
