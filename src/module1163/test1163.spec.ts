
import { test, expect } from "@playwright/experimental-ct-react";
import App1163 from "./App1163.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1163 />);
  await expect(component).toContainText("Learn React");
});