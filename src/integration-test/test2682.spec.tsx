
import { test, expect } from "@playwright/experimental-ct-react";
import App2682 from "../example/App2682.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2682 />);
  await expect(component).toContainText("Learn React");
});
