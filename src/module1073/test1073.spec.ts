
import { test, expect } from "@playwright/experimental-ct-react";
import App1073 from "./App1073.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1073 />);
  await expect(component).toContainText("Learn React");
});
