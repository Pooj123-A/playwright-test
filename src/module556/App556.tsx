
import { test, expect } from "@playwright/experimental-ct-react";
import App556 from "./App556.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App556 />);
  await expect(component).toContainText("Learn React");
});
