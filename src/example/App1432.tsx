
import { test, expect } from "@playwright/experimental-ct-react";
import App1432 from "./App1432.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1432 />);
  await expect(component).toContainText("Learn React");
});
