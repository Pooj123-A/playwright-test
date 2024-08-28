
import { test, expect } from "@playwright/experimental-ct-react";
import App2857 from "./App2857.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2857 />);
  await expect(component).toContainText("Learn React");
});
