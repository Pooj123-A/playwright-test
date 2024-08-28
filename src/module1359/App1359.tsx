
import { test, expect } from "@playwright/experimental-ct-react";
import App1359 from "./App1359.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1359 />);
  await expect(component).toContainText("Learn React");
});
