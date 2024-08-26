
import { test, expect } from "@playwright/experimental-ct-react";
import App2139 from "../example/App2139.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2139 />);
  await expect(component).toContainText("Learn React");
});
