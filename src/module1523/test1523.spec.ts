
import { test, expect } from "@playwright/experimental-ct-react";
import App1523 from "./App1523.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1523 />);
  await expect(component).toContainText("Learn React");
});