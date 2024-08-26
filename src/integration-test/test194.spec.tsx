
import { test, expect } from "@playwright/experimental-ct-react";
import App194 from "../example/App194.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App194 />);
  await expect(component).toContainText("Learn React");
});
