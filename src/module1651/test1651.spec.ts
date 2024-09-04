
import { test, expect } from "@playwright/experimental-ct-react";
import App1651 from "./App1651.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1651 />);
  await expect(component).toContainText("Learn React");
});
