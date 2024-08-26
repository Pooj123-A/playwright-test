
import { test, expect } from "@playwright/experimental-ct-react";
import App2500 from "../example/App2500.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2500 />);
  await expect(component).toContainText("Learn React");
});
