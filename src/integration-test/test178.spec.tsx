
import { test, expect } from "@playwright/experimental-ct-react";
import App178 from "../example/App178.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App178 />);
  await expect(component).toContainText("Learn React");
});
