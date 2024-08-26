
import { test, expect } from "@playwright/experimental-ct-react";
import App1396 from "../example/App1396.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1396 />);
  await expect(component).toContainText("Learn React");
});
