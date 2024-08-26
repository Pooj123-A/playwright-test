
import { test, expect } from "@playwright/experimental-ct-react";
import App2689 from "../example/App2689.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2689 />);
  await expect(component).toContainText("Learn React");
});
