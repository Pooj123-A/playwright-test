
import { test, expect } from "@playwright/experimental-ct-react";
import App860 from "../example/App860.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App860 />);
  await expect(component).toContainText("Learn React");
});
