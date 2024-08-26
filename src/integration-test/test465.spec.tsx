
import { test, expect } from "@playwright/experimental-ct-react";
import App465 from "../example/App465.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App465 />);
  await expect(component).toContainText("Learn React");
});
