
import { test, expect } from "@playwright/experimental-ct-react";
import App2832 from "../example/App2832.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2832 />);
  await expect(component).toContainText("Learn React");
});
