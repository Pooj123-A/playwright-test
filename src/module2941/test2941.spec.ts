
import { test, expect } from "@playwright/experimental-ct-react";
import App2941 from "./App2941.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2941 />);
  await expect(component).toContainText("Learn React");
});
