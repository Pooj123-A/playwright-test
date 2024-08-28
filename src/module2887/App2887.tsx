
import { test, expect } from "@playwright/experimental-ct-react";
import App2887 from "./App2887.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2887 />);
  await expect(component).toContainText("Learn React");
});
