
import { test, expect } from "@playwright/experimental-ct-react";
import App714 from "../example/App714.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App714 />);
  await expect(component).toContainText("Learn React");
});
