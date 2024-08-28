
import { test, expect } from "@playwright/experimental-ct-react";
import App1249 from "./App1249.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1249 />);
  await expect(component).toContainText("Learn React");
});
