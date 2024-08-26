
import { test, expect } from "@playwright/experimental-ct-react";
import App1377 from "./App1377.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1377 />);
  await expect(component).toContainText("Learn React");
});
