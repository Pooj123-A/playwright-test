
import { test, expect } from "@playwright/experimental-ct-react";
import App66 from "./App66.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App66 />);
  await expect(component).toContainText("Learn React");
});
