
import { test, expect } from "@playwright/experimental-ct-react";
import App1391 from "./App1391.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1391 />);
  await expect(component).toContainText("Learn React");
});
