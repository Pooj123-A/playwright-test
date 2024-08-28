
import { test, expect } from "@playwright/experimental-ct-react";
import App1239 from "./App1239.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1239 />);
  await expect(component).toContainText("Learn React");
});
