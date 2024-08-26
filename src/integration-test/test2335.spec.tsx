
import { test, expect } from "@playwright/experimental-ct-react";
import App2335 from "../example/App2335.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2335 />);
  await expect(component).toContainText("Learn React");
});
