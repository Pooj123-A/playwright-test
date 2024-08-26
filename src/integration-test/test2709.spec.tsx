
import { test, expect } from "@playwright/experimental-ct-react";
import App2709 from "../example/App2709.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2709 />);
  await expect(component).toContainText("Learn React");
});
