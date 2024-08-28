
import { test, expect } from "@playwright/experimental-ct-react";
import App1679 from "./App1679.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1679 />);
  await expect(component).toContainText("Learn React");
});
