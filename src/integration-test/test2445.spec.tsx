
import { test, expect } from "@playwright/experimental-ct-react";
import App2445 from "../example/App2445.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2445 />);
  await expect(component).toContainText("Learn React");
});
