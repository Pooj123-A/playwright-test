
import { test, expect } from "@playwright/experimental-ct-react";
import App1349 from "./App1349.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1349 />);
  await expect(component).toContainText("Learn React");
});
