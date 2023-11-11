"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmiting, setSubmiting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmiting(false);
      setError("An unexpected error occured");
    }
  })

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="ml-5">
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3 p-5"
        onSubmit={onSubmit}
      >
        <TextField.Root>
          <TextField.Input placeholder="title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmiting}>
          Submit new issue {isSubmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
