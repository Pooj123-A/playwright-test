
import { test, expect } from "@playwright/experimental-ct-react";
import App162 from "../example/App162.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App162 />);
  await expect(component).toContainText("Learn React");
});
