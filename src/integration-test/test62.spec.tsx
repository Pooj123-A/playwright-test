
import { test, expect } from "@playwright/experimental-ct-react";
import App62 from "../example/App62.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App62 />);
  await expect(component).toContainText("Learn React");
});
