
import { test, expect } from "@playwright/experimental-ct-react";
import App1776 from "../example/App1776.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1776 />);
  await expect(component).toContainText("Learn React");
});
