
import { test, expect } from "@playwright/experimental-ct-react";
import App2845 from "./App2845.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2845 />);
  await expect(component).toContainText("Learn React");
});
