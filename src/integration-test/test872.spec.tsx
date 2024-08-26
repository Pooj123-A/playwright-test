
import { test, expect } from "@playwright/experimental-ct-react";
import App872 from "../example/App872.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App872 />);
  await expect(component).toContainText("Learn React");
});
