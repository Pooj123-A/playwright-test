
import { test, expect } from "@playwright/experimental-ct-react";
import App2101 from "../example/App2101.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2101 />);
  await expect(component).toContainText("Learn React");
});
