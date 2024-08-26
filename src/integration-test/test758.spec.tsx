
import { test, expect } from "@playwright/experimental-ct-react";
import App758 from "../example/App758.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App758 />);
  await expect(component).toContainText("Learn React");
});
