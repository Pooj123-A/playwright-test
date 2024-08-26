
import { test, expect } from "@playwright/experimental-ct-react";
import App2475 from "../example/App2475.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2475 />);
  await expect(component).toContainText("Learn React");
});
