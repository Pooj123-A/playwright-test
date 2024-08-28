
import { test, expect } from "@playwright/experimental-ct-react";
import App1853 from "./App1853.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1853 />);
  await expect(component).toContainText("Learn React");
});
