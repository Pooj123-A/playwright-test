
import { test, expect } from "@playwright/experimental-ct-react";
import App1033 from "./App1033.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1033 />);
  await expect(component).toContainText("Learn React");
});
