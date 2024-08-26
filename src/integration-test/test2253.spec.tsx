
import { test, expect } from "@playwright/experimental-ct-react";
import App2253 from "../example/App2253.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2253 />);
  await expect(component).toContainText("Learn React");
});
