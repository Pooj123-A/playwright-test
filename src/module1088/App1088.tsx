
import { test, expect } from "@playwright/experimental-ct-react";
import App1088 from "./App1088.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1088 />);
  await expect(component).toContainText("Learn React");
});
