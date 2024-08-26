
import { test, expect } from "@playwright/experimental-ct-react";
import App2670 from "../example/App2670.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2670 />);
  await expect(component).toContainText("Learn React");
});
