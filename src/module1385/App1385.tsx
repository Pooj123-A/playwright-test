
import { test, expect } from "@playwright/experimental-ct-react";
import App1385 from "./App1385.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1385 />);
  await expect(component).toContainText("Learn React");
});
