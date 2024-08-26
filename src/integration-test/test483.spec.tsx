
import { test, expect } from "@playwright/experimental-ct-react";
import App483 from "../example/App483.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App483 />);
  await expect(component).toContainText("Learn React");
});
