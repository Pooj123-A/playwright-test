
import { test, expect } from "@playwright/experimental-ct-react";
import App575 from "../example/App575.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App575 />);
  await expect(component).toContainText("Learn React");
});
