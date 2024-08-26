
import { test, expect } from "@playwright/experimental-ct-react";
import App588 from "../example/App588.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App588 />);
  await expect(component).toContainText("Learn React");
});
