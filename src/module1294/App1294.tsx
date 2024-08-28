
import { test, expect } from "@playwright/experimental-ct-react";
import App1294 from "./App1294.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1294 />);
  await expect(component).toContainText("Learn React");
});
