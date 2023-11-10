import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div className="p-5">
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
