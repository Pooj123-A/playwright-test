
import { test, expect } from "@playwright/experimental-ct-react";
import App1620 from "./App1620.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1620 />);
  await expect(component).toContainText("Learn React");
});
