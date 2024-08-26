
import { test, expect } from "@playwright/experimental-ct-react";
import App2229 from "../example/App2229.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2229 />);
  await expect(component).toContainText("Learn React");
});
