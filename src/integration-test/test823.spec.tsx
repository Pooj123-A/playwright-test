
import { test, expect } from "@playwright/experimental-ct-react";
import App823 from "../example/App823.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App823 />);
  await expect(component).toContainText("Learn React");
});
