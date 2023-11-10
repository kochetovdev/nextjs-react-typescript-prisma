"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3 p-5">
      <TextField.Root>
        <TextField.Input placeholder="title" />
      </TextField.Root>
      <SimpleMDE placeholder="description" />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
