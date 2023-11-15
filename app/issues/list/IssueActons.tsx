import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActons = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActons;
