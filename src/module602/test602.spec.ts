
import { test, expect } from "@playwright/experimental-ct-react";
import App602 from "./App602.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App602 />);
  await expect(component).toContainText("Learn React");
});
