
import { test, expect } from "@playwright/experimental-ct-react";
import App2852 from "../example/App2852.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2852 />);
  await expect(component).toContainText("Learn React");
});
