
import { test, expect } from "@playwright/experimental-ct-react";
import App495 from "../example/App495.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App495 />);
  await expect(component).toContainText("Learn React");
});
