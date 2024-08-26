
import { test, expect } from "@playwright/experimental-ct-react";
import App2526 from "../example/App2526.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2526 />);
  await expect(component).toContainText("Learn React");
});
