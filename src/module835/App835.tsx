
import { test, expect } from "@playwright/experimental-ct-react";
import App835 from "./App835.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App835 />);
  await expect(component).toContainText("Learn React");
});
