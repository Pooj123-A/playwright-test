
import { test, expect } from "@playwright/experimental-ct-react";
import App1363 from "./App1363.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1363 />);
  await expect(component).toContainText("Learn React");
});
