
import { test, expect } from "@playwright/experimental-ct-react";
import App2460 from "../example/App2460.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2460 />);
  await expect(component).toContainText("Learn React");
});
