
import { test, expect } from "@playwright/experimental-ct-react";
import App1749 from "./App1749.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1749 />);
  await expect(component).toContainText("Learn React");
});
