
import { test, expect } from "@playwright/experimental-ct-react";
import App2597 from "../example/App2597.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2597 />);
  await expect(component).toContainText("Learn React");
});
