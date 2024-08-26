
import { test, expect } from "@playwright/experimental-ct-react";
import App1216 from "./App1216.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1216 />);
  await expect(component).toContainText("Learn React");
});
