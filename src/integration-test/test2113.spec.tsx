
import { test, expect } from "@playwright/experimental-ct-react";
import App2113 from "../example/App2113.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2113 />);
  await expect(component).toContainText("Learn React");
});
