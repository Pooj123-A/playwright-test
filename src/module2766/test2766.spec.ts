
import { test, expect } from "@playwright/experimental-ct-react";
import App2766 from "./App2766.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2766 />);
  await expect(component).toContainText("Learn React");
});
