
import { test, expect } from "@playwright/experimental-ct-react";
import App2103 from "./App2103.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2103 />);
  await expect(component).toContainText("Learn React");
});
