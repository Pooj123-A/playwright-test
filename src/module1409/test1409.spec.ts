
import { test, expect } from "@playwright/experimental-ct-react";
import App1409 from "./App1409.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1409 />);
  await expect(component).toContainText("Learn React");
});
