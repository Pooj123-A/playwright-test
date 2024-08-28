
import { test, expect } from "@playwright/experimental-ct-react";
import App2714 from "./App2714.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2714 />);
  await expect(component).toContainText("Learn React");
});
