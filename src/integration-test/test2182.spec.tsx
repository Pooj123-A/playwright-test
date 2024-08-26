
import { test, expect } from "@playwright/experimental-ct-react";
import App2182 from "../example/App2182.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2182 />);
  await expect(component).toContainText("Learn React");
});
