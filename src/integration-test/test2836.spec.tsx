
import { test, expect } from "@playwright/experimental-ct-react";
import App2836 from "../example/App2836.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2836 />);
  await expect(component).toContainText("Learn React");
});
