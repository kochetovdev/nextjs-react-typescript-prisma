import prisma from "@/prisma/migrations/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusBage from "../components/IssueStatusBage";
import delay from 'delay';
import IssueActons from "./IssueActons";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000)

  return (
    <div className="p-5">
      <IssueActons />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                {issue.title}
                <div className="block md:hidden"><IssueStatusBage status={issue.status} /></div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell"><IssueStatusBage status={issue.status} /></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
