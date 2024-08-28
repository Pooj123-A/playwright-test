
import { test, expect } from "@playwright/experimental-ct-react";
import App1098 from "./App1098.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1098 />);
  await expect(component).toContainText("Learn React");
});
