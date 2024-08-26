
import { test, expect } from "@playwright/experimental-ct-react";
import App2332 from "../example/App2332.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2332 />);
  await expect(component).toContainText("Learn React");
});
