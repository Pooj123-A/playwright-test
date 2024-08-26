
import { test, expect } from "@playwright/experimental-ct-react";
import App1177 from "./App1177.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1177 />);
  await expect(component).toContainText("Learn React");
});
