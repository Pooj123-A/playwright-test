
import { test, expect } from "@playwright/experimental-ct-react";
import App2882 from "../example/App2882.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2882 />);
  await expect(component).toContainText("Learn React");
});
