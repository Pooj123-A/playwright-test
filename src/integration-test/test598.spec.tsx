
import { test, expect } from "@playwright/experimental-ct-react";
import App598 from "../example/App598.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App598 />);
  await expect(component).toContainText("Learn React");
});
