
import { test, expect } from "@playwright/experimental-ct-react";
import App1868 from "./App1868.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1868 />);
  await expect(component).toContainText("Learn React");
});
