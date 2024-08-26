
import { test, expect } from "@playwright/experimental-ct-react";
import App2163 from "../example/App2163.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2163 />);
  await expect(component).toContainText("Learn React");
});
