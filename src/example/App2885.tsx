
import { test, expect } from "@playwright/experimental-ct-react";
import App2885 from "./App2885.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2885 />);
  await expect(component).toContainText("Learn React");
});
