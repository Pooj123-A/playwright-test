
import { test, expect } from "@playwright/experimental-ct-react";
import App2865 from "./App2865.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2865 />);
  await expect(component).toContainText("Learn React");
});
