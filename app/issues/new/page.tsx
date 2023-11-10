"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  return (
    <form 
      className="max-w-xl space-y-3 p-5"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data);
        router.push('/issues')
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="title" {...register('title')}/>
      </TextField.Root>
      <Controller
        control={control}
        name="description"
        render={({ field }) => <SimpleMDE placeholder="description" {...field}/>}
      />
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
