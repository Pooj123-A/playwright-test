
import { test, expect } from "@playwright/experimental-ct-react";
import App2715 from "../example/App2715.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2715 />);
  await expect(component).toContainText("Learn React");
});
